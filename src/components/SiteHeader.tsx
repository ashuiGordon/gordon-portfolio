"use client";

import { useEffect, useState } from "react";

import styles from "./SiteHeader.module.css";

const navigation = [
  { id: "about", label: "whoami" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

type NavigationId = (typeof navigation)[number]["id"];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<NavigationId | null>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id as NavigationId);
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <div className={`term-container ${styles.inner}`}>
        <a className={styles.brand} href="#hero" aria-label="Back to top">
          <span className={styles.brandDesktop}>gordon@portfolio:~$</span>
          <span className={styles.brandCompact}>g:~$</span>
        </a>

        <ul className={styles.links}>
          {navigation.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <li key={id}>
                <a
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                  href={`#${id}`}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span className={styles.linkDesktopLabel}>{label}</span>
                  <span className={styles.linkCompactLabel}>
                    {id === "experience" ? "work" : label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
