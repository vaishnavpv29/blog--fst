"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


const a = [
  { id: 1, src: "/chinese.png", title: "chinese", rating: 4.5, type: "Chinese", time: "30 min" },
  { id: 2, src: "/meals.png", title: "Anapoorna", rating: 4.2, type: "South Indian", time: "25 min" },
  { id: 3, src: "/pizza.png", title: "piza hut", rating: 4.0, type: "Pizza", time: "35 min" },
  { id: 4, src: "/burger.png", title: "Burger King", rating: 4.3, type: "Burgers", time: "20 min" },
  { id: 5, src: "/fish.png", title: "Fishnchips", rating: 4.1, type: "Seafood", time: "40 min" },
  { id: 6, src: "/bbq.png", title: "BBQ", rating: 4.4, type: "Barbecue", time: "45 min" },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.navItem}>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </li>
          <li className={styles.navItem}>
            <a href="/home">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/help">Help</a>
          </li>
          <li className={styles.navItem}>
         <a href="/search">Search</a>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog/login/user">user_login</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog/login/admin">admin_login</Link>
          </li>
        </ul>
      </nav>
      <header className={styles.header}>
        <p>Top restaurants chains in Noida</p>
        <div className={styles["blog-list"]}>
          {a.map((img) => (
            <Link
              key={img.id}
              href={`/blog/${img.id}`}
              className={styles["blog-card"]}
            >
              <img
                src={img.src}
                alt={img.title}
                className={styles["blog-image"]}
              />
              <div className={styles["blog-title"]}>{img.title}</div>
            </Link>
          ))}
        </div>
      </header>
      <div className={styles.content}>
        <p>Restaurants with online food delivery in Noida</p>
        <div className={styles["blog-list"]}>
          {a.map((img) => (
            <Link
              key={img.id}
              href={`/blog/${img.id}`}
              className={styles["blog-card"]}
            >
              <img
                src={img.src}
                alt={img.title}
                className={styles["blog-image"]}
              />
              <div className={styles["blog-title"]}>{img.title}</div>
              <div className={styles["blog-details"]}>
                <span className={styles["blog-rating"]}></span>
                <span className={styles["blog-type"]}>{img.type}</span>
                <span className={styles["blog-time"]}>{img.time}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

