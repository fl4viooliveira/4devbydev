import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="/logo.svg" width={200} height={80} />
    </div>
  );
}
