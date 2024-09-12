
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';


export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('about')}</h2>
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
              <h3>{t('target')}</h3>
              <p>
              {t('before_IS')}
              <b>{t('Information System')}</b>
              {t('after_IS')}       
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width="100" height="100" src={getImageUrl("about/graduation-hat.png")} alt="graduation icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('education')}</h3>
              <p>
                {t('school')}
                <br/>
                {t('major')}: {t('Information System')}
                <br />
                {t('GPA')}: 3,44/4
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img width="100" height="100" src={getImageUrl("about/translation.png")} alt="languge icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('languages')}</h3>
              <p>
                {t('languages_english')}
                <br />
                {t('languages_chinese')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
