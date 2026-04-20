import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className={styles.button}>
          <i className="fas fa-home"></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
