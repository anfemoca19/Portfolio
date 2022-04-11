import React from "react";

// Components
import SocialLinks from "@/components/Nav/SocialLinks";

// CSS
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles["header__subtitle"]}>Hello.</span>
          <span className={styles["header__subtitle"]}>I am</span>
          <h1 className={styles["header__title"]}>Andres Morales</h1>
        </header>
        <section className={styles.main}>
          <p className={styles["main__paragraph"]}>
            Softwared developer based in Medellin - Colombia
          </p>
          <SocialLinks />
        </section>
      </div>
    </div>
  );
};

export default Home;
