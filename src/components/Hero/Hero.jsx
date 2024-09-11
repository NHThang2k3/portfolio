
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CV from "../../../assets/hero/CV.pdf"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm 
          <br />
          Nguyen Huu Thang
        </h1>
        <p className={styles.description}>
          I'm a Frontend React Native developer!
        </p>
        <a href={CV} download="" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/avatar.jpg")}
        alt="avatar"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
