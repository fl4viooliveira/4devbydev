import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Products.module.css";
import React, { useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function Products(item) {
  const pro = item;
  const syncProduct = pro.item.sync_product;
  const syncVariant = pro.item.sync_variants;

  const items = useSelector((state) => state.cart.quantity);

  const cartIdGenerator = (deepness = 10) =>
    parseInt(Date.now() + Math.random() * deepness);

  const [product, setProduct] = useState({
    id: syncProduct.id,
    name: syncProduct.name,
    thumbnail_url: syncProduct.thumbnail_url,
    variantName: syncVariant[0].name,
    variantId: syncVariant[0].id,
    retail_price: syncVariant[0].retail_price,
    cartId: cartIdGenerator(),
  });

  let quantity = 0;

  const price = Number(product.retail_price);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const valueArray = e.target.value.split(",");
    setProduct({
      ...product,
      variantName: valueArray[0],
      variantId: Number(valueArray[1]),
    });
  };

  const handleClick = () => {
    setProduct({
      ...product,
      cartId: cartIdGenerator(),
    });
    dispatch(addProduct({ product, quantity, price }));
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.containerBox}>
        <div className={styles.imageBox}>
          <img
            className={styles.productImg}
            src={syncProduct.thumbnail_url}
            alt=""
          />
        </div>
        <div className={styles.infoBox}>
          <h1>{syncProduct.name}</h1>
          <div className={styles.productOptions}>
            <label htmlFor="variant">Choose one option:</label>
            <select onChange={handleChange}>
              {syncVariant.map((variant) => (
                <option key={variant.id} value={[variant.name, variant.id]}>
                  {variant.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.bottomLine}>
            <h1>£{syncVariant[0].retail_price}</h1>
            <button onClick={handleClick} type="submit">
              {/* Add to Cart - {items > 0 ? `${items} item/s` : 0 + " item/s"} */}
              Add to Cart
            </button>
            <Link href="/cart">
              <div>
                {items ? (
                  <div className={styles.cartLink}>
                    <i>
                      <Image src="/icons/cart.svg" width={30} height={30} />
                    </i>
                    <h2>{`${items} item/s`}</h2>
                  </div>
                ) : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };
  const res = await fetch("https://api.printful.com/store/products", {
    headers,
  });
  const items = await res.json();

  const paths = items.result.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };
  const res = await fetch(
    `https://api.printful.com/store/products/${params.id}`,
    {
      headers,
    }
  );
  const item = await res.json();

  return {
    props: {
      item: item.result,
    },
  };
};
