
import React, { useState } from 'react';
import Link from 'next/link';
// import { FaUserCircle } from 'react-icons/fa';
import styles from '@/styles/index.module.css';

const Home = () => {
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const containerClassName = `${styles.container} ${
    mode === 'dark' ? styles.darkMode : styles.lightMode
  }`;

  return (
    <div className={containerClassName}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>My Homepage</h1>
        </div>
        {/* <div className={styles.userIcon}>
          <Link href="/login" passHref>
            <FaUserCircle />
          </Link>
        </div> */}
        <button onClick={toggleMode} className={styles.toggleButton}>
          Toggle Mode
        </button>
      </header>
      <main className={styles.main}>
        <h1>Welcome to My Homepage</h1>
        
        <div className={styles.pagecontainer}>
  <div className={styles.buttoncontainer}>
  <button className={styles["tile-button"]}><Link href={"/Wife"}>Wife</Link></button>
    <button className={styles["tile-button"]}><Link href={"/Sister"}>Sister</Link></button>
    <button className={styles["tile-button"]}><Link href={"/Mother"}>Mother</Link></button>
    <button className={styles["tile-button"]}><Link href={"/Husband"}>Husband</Link></button>
    <button className={styles["tile-button"]}><Link href={"/Brother"}>Brother</Link></button>
    <button className={styles["tile-button"]}><Link href={"/Father"}>Father</Link></button>
  </div>
  <div className={styles.slideshowcontainer}>
    {}
  </div>
</div>

      </main>
    </div>
  );
};

export default Home;
