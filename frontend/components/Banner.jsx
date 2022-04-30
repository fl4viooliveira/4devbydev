import Link from "next/link";
import styles from "../styles/Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={process.env.NEXT_PUBLIC_BANNER_IMG} alt="" />
      </div>
      <div className={styles.infoBox}>
        <h2>
          This project intends to be an appliable commercially e-commerce web
          application with a functional deployed website direct from our
          OpenSource repository.
        </h2>
        <Link href="/about">
          <button>View more</button>
        </Link>
      </div>
    </div>
  );
}
