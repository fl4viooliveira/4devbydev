import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Success.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { cleanCart } from "../redux/cartRedux";
import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanCart());
  }, [dispatch, cleanCart]);

  const router = useRouter();
  const location = router.pathname;
  console.log(location);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Order placed! You will receive an email confirmation.</h1>
        <Link href={order.invoice}>
          <a target="_blank">View your last Invoice</a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
