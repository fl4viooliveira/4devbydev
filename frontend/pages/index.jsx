import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProjectBanner from "../components/ProjectBanner";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <ProjectBanner />
      <div className={styles.productsContainer}>
        <ul className={styles.list}>
          {products.map((product) => (
            <li key={product.id} className={styles.product}>
              <img src={product.thumbnail_url} />
              <h3>{product.name}</h3>
              <div className={styles.bottomLine}>
                <Link href="/[id]" as={`/${product.id}`}>
                  <button>Take a look</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const headers = { Authorization: `Bearer ${process.env.PRINTIFUL_KEY}` };
  const res = await fetch("https://api.printful.com/store/products", {
    headers,
  });
  const products = await res.json();

  return {
    props: {
      products: products.result,
    },
  };
};
