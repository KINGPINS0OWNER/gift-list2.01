// registration.js
import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios'; // Import axios for making HTTP requests
import styles from '@/styles/registration.module.css';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [mode, setMode] = useState('light'); // 'light' or 'dark'

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        firstName,
        lastName,
        email,
      });

      if (response.status === 200) {
        alert('User registered successfully!');
      } else {
        alert('Error registering user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user.');
    }
  };

  return (
    <>
      <Head>
        <title>Registration Page</title>
      </Head>
      <div className={`${styles.container} ${mode === 'dark' ? styles.darkMode : styles.lightMode}`}>
        <h1 className={styles.title}>Registration Page</h1>
        <div className={`${styles['registration-form']} ${mode === 'dark' ? styles.darkMode : styles.lightMode}`}>
          <form onSubmit={handleRegistration}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            /><br /><br />

            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            /><br /><br />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /><br /><br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />

            <label htmlFor="retypePassword">Re-type Password:</label>
            <input
              type="password"
              id="retypePassword"
              name="retypePassword"
              placeholder="Re-type your password"
              required
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
            /><br /><br />

            {passwordMatchError && (
              <p style={{ color: 'red' }}>Passwords do not match.</p>
            )}

            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
          <div>
            <button onClick={toggleMode} className={styles.toggleButton}>
              Toggle Mode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
