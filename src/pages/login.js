// login.js
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/login.module.css';
import { FaTimes } from 'react-icons/fa';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Authentication failed');
      }

      // Authentication successful
      console.log('Authentication successful!');
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <>
      
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Homepage</title>
      </Head>
      <div className={`${styles.container} ${styles.body} ${mode === 'dark' ? styles.darkMode : styles.lightMode}`}>
        <h1 className={styles.title}>Welcome to My Homepage</h1>
        <div className={`${styles['login-form']} ${mode === 'dark' ? styles.darkMode : styles.lightMode}`}>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className={styles['input-group']}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>

            <button type="submit" className="signin-btn">
              Sign In
            </button>

            <button type="button">
              <Link href="/registration">Create username</Link>
            </button>

            <button type="button">
              <Link href="/listPage">List Page</Link>
            </button>
            
          </form>
         <br></br>
          <button onClick={toggleMode} className={styles.toggleButton}>
        Toggle Mode
      </button>
        </div>
      </div>
    </>
  );
};

export default Home;
