import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Cart.module.css";
import { removeProduct } from "../redux/cartRedux";
import Link from "next/link";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <ul className={styles.cartList}>
          {cart.products.map((product) => (
            <li className={styles.item} key={product.cartId}>
              <img
                className={styles.productImg}
                src={product.thumbnail_url}
                alt=""
              />
              <h2>{product.variantName}</h2>
              <h1>£{product.retail_price}</h1>
              <img
                className={styles.bin}
                src="icons/bin.svg"
                alt=""
                onClick={() =>
                  dispatch(
                    removeProduct([
                      product.cartId,
                      Number(product.retail_price),
                    ])
                  )
                }
              />
            </li>
          ))}
        </ul>
        <div className={styles.priceInfo}>
          <h1>
            Total: <span>£{cart.total}</span>
          </h1>
          <Link href={"/checkout"}>
            <button>Checkout</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
