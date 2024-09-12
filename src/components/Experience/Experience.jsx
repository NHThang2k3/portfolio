
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import historyEN from "../../data/historyEN.json";
import historyCN from "../../data/historyCN.json";
import historyVI from "../../data/historyVI.json";
import { getImageUrl } from "../../utils";
import { useTranslation } from 'react-i18next';


export const Experience = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const isVietnamese = i18n.language === 'vi';
  const isChinese = i18n.language === 'cn';

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('experience')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {isEnglish && (historyEN.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}
                  </h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          }))}
          {isVietnamese && (historyVI.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}
                  </h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          }))}
          {isChinese && (historyCN.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}
                  </h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          }))}

        </ul>
      </div>
    </section>
  );
};
