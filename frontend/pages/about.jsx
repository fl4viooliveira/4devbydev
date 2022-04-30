import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.textBox}>
          <p>I started to develop this project to solve some problems:</p>
          <ul>
            <li>Create a real-world full-stack application.</li>
            <li>Create a scalable e-commerce structure from scratch.</li>
            <li>Offer real products.</li>
            <li>OpenSource Challenges.</li>
          </ul>

          <h2>Real-world full-stack application:</h2>
          <p>
            This project can be a base for a startup e-commerce application and
            create the possibility of applying to diverse contexts.
          </p>
          <h2>Scalable e-commerce structure:</h2>
          <p>
            The first version of this project was a minimal valuable product,
            which means that it is e-commerce where the customer can buy a
            product and receive it at your house in the simplest way. But the
            project structure is made to grow and cover more customers and admin
            necessities.{" "}
          </p>
          <h2>Offer real products:</h2>
          <p>
            To make sense and make the users and contributors of this project
            touch a full applicable app is the main target of this project.
          </p>
          <h2>OpenSource Challenges.</h2>
          <p>
            During my learning process, I focused on practical learning methods
            building things that it is possible to deploy and see working on the
            browser. The next step of this learning process is to expose my
            development and interact with suggestions, critics and different
            points of view, believing that will make me a better dev.
          </p>
          <h3>
            Thank you for visiting this page to understand more about the
            project.
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}
