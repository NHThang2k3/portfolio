
// import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./LanguageSelector.module.css";


export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();


  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className={styles.selector}>
      <label>
        <select className={styles.select} onChange={handleChange} defaultValue={i18n.language}>
          <option value="en">{t('English')}</option>
          <option value="vi">{t('Vietnamese')}</option>
          <option value="cn">{t('Chinese')}</option>
        </select>
      </label>
    </div>
    
  );
};
