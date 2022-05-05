import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.navBar}>
      <Link href="/">
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" />
        </div>
      </Link>
      <ul
        className={
          click ? `${styles.topMenu} ${styles.active}` : styles.topMenu
        }
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
      <ul
        className={
          click ? `${styles.userMenu} ${styles.active}` : styles.userMenu
        }
      >
        {/* <li>
          <img className={styles.icon} src="/icons/user.svg" />
          Login
        </li> */}
        <Link href="/cart">
          <li>
            <h6>{quantity}</h6>
            <img className={styles.icon} src="/icons/cart.svg" />
            Cart
          </li>
        </Link>
      </ul>
      <div
        className={click ? `${styles.toggle} ${styles.active}` : styles.toggle}
        onClick={handleClick}
      ></div>
    </div>
  );
}
