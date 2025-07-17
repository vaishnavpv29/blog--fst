"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../login.module.css";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      router.push("/blog/dashboard");
    } else {
      setError("Invalid admin credentials.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
      <div className={styles.demoInfo}>
        <p>Demo Admin: <b>admin</b> / <b>admin123</b></p>
      </div>
    </div>
  );
}
