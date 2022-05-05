import Link from "next/link";
import styles from "../styles/ProjectBanner.module.css";

export default function ProjectBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.projectBox}>
        <h2>4DEVbyDEV project</h2>
        <p>
          You can find all details and codebase of this project in our GitHub
          repository. Please take a look and give us a star. ⭐ 😉
        </p>
        <div className={styles.buttonLine}>
          <Link href="https://github.com/fl4viooliveira/4devbydev">
            <button>
              <img src="icons/git.svg" alt="" />
              Repository
            </button>
          </Link>
          {/* <button>View more</button> */}
        </div>
      </div>
      <div className={styles.helpBox}>
        <h2>How help this Open Source project?</h2>
        <ul className={styles.helpItems}>
          <li>
            <img src="icons/git-mask.svg" alt="" />
            <span>Code contribution.</span>
          </li>
          <li>
            <img src="icons/heart.svg" alt="" />
            <span>Sponsoring the project.</span>
          </li>
          <li>
            <img src="icons/add-cart.svg" alt="" />
            <span>Buying a product on this website.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
