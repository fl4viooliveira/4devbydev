import styles from "../styles/Checkout.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setInvoice } from "../redux/orderRedux";
import { cleanCart } from "../redux/cartRedux";
import axios from "axios";

const KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const router = useRouter();

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  const [one, setOne] = useState("");
  const [formName, setFormName] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formState, setFormState] = useState(null);
  const [formCountry, setFormCountry] = useState("GB");
  const [formZip, setFormZip] = useState("");

  const [confirm, setConfirm] = useState(false);
  const [recipient, setRecipient] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecipient({
      name: formName,
      address1: formAddress,
      city: formCity,
      state_code: formState,
      country_code: formCountry,
      zip: formZip,
    });
  };

  const createList = () => {
    const list = [];
    cart.products.map((product) => {
      list.push({ sync_variant_id: product.variantId, quantity: 1 });
    });
    return list;
  };

  const order = {
    recipient: recipient,
    items: createList(),
  };

  const handleClick = () => {
    setConfirm(true);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("api/printful/order", {
          order: order,
        });
        const orderIdNum = res.data.result;
        const orderId = orderIdNum.id;
        const storeId = orderIdNum.store;

        const payRes = await axios.post("api/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        const paid = payRes.data.paid;

        if (paid === true) {
          dispatch(setInvoice(payRes.data.receipt_url));
          const orderRes = await axios.post("api/printful/confirm", {
            id: orderId,
            store: storeId,
          });
          router.push("/success", { data: orderRes.data });
        } else {
          router.push("/error");
        }
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && confirm && makeRequest();
  }, [order, confirm, router, stripeToken, cart.total, dispatch, cleanCart]);

  return (
    <div className={styles.containerBox}>
      <Navbar />
      <div className={styles.mainBox}>
        <div className={styles.shippingBox}>
          <form className={styles.formBox} onSubmit={handleSubmit}>
            <h2>Shipping Address</h2>
            <div className={styles.inputBox}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Add your name"
                onChange={(e) => setFormName(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Add your address"
                onChange={(e) => setFormAddress(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Add your city"
                onChange={(e) => setFormCity(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="postcode">Postcode</label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                placeholder="Add your postcode"
                onChange={(e) => setFormZip(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="country">For now, only to the UK</label>
              {/* <input
                type="text"
                name="country"
                id="country"
                placeholder="Sorry. For now, only to the UK"
                onChange={(e) => setFormCountry(e.target.value)}
              /> */}
            </div>
            <button className={styles.button} onClick={handleClick}>
              Confirm Address
            </button>
          </form>
        </div>

        <div className={styles.productsBox}>
          <div className={styles.listBox}>
            <h2>Order Products</h2>
            <ul className={styles.productsList}>
              {cart.products.map((product) => (
                <li className={styles.item} key={product.cartId}>
                  <h5>{product.variantName}</h5>
                  <h5>£{product.retail_price}</h5>
                </li>
              ))}
            </ul>
            <div className={styles.totalPrice}>
              <h2>Total: £{cart.total}</h2>
            </div>
            {recipient && (
              <StripeCheckout
                name="4DEVbyDEV"
                image="/logo.svg"
                billingAddress={true}
                shippingAddress={false}
                description={`Your total is £${cart.total}`}
                amount={cart.total * 100}
                currency="GBP"
                token={onToken}
                stripeKey={KEY}
              >
                <button className={styles.button}>Conclude the Payment</button>
              </StripeCheckout>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
