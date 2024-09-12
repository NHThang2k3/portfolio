
import styles from "./Projects.module.css";

import projectsEN from "../../data/projectsEN.json";
import projectsCN from "../../data/projectsCN.json";
import projectsVI from "../../data/projectsVI.json";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const isEnglish = i18n.language === 'en';
  const isVietnamese = i18n.language === 'vi';
  const isChinese = i18n.language === 'cn';
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{t('projects')}</h2>
      <div className={styles.projects}>
        {isEnglish && (
          projectsEN.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })
        )}
        {isVietnamese && (
          projectsVI.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })
        )}
        {isChinese && (
          projectsCN.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })
        )}
        
      </div>
      
    </section>
  );
};
