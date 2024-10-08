
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';


export const Contact = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact')}</h2>
        {/* <p>Feel free to reach out!</p> */}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:nguyenhuuthang02032003@gmail.com">nguyenhuuthang02032003@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/huu-thang-nguyen-30b4812a9/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/NHThang2k3">github.com/NHThang2k3</a>
        </li>
      </ul>
    </footer>
  );
};
