import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CV from "../../../assets/hero/CV.pdf"
import { useTranslation } from 'react-i18next';
// import './i18n'; // Nhúng cấu hình i18next

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t('hi')}
          <br />
          {t('name')}
        </h1>
        <p className={styles.description}>
          {t('bio')}
        </p>
        <a href={CV} download="" className={styles.contactBtn}>
          {t('download')}
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
