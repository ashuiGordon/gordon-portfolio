import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`term-container ${styles.inner}`}>
        <p>{"// Built in public with Next.js and GitHub Pages."}</p>
        <p>© 2026 Gordon</p>
      </div>
    </footer>
  );
}
