import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { useState } from "react";
import { getImageUrl } from "./utils";

function App() {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const handleChangePage = ()=> {
    setIsGifVisible(!isGifVisible);

    setTimeout(() => {
      setIsGifVisible(prev => !prev);
    }, 3800);
  }

  return (
    <div className={styles.App}>
      <div className={`${styles.fullContainer} ${isGifVisible ? styles.active : ''}`}>
        { isGifVisible && <img src={getImageUrl("nav/t3.gif")} alt="changePage" className={styles.fullImage}/> }
      </div>

      <Navbar handleChangePage={handleChangePage} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;