
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img width="100" height="100" src={getImageUrl("about/target.png")} alt="target icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
              Having the background of
              <b> Information System</b>
              , I am definitely seeking to job and experience that assist me in learning and working related to my major       
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width="100" height="100" src={getImageUrl("about/graduation-hat.png")} alt="graduation icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                HCMUS (Ho Chi Minh University of Science)
                <br/>
                Major: Information System
                <br />
                GPA:  3,44/4
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width="100" height="100" src={getImageUrl("about/translation.png")} alt="languge icon" />
            <div className={styles.aboutItemText}>
              <h3>Languages</h3>
              <p>
                English: TOIEC 675 (Listening + Reading) (7/2024)
                <br />
                Chinese: HSK5
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
