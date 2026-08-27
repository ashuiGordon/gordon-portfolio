import Image from "next/image";

import { profile } from "@/data/portfolio";
import { assetPath } from "@/lib/base-path";

import styles from "./HeroSection.module.css";

const asciiName = ` ██████╗  ██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗
██╔════╝ ██╔═══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║
██║  ███╗██║   ██║██████╔╝██║  ██║██║   ██║██╔██╗ ██║
██║   ██║██║   ██║██╔══██╗██║  ██║██║   ██║██║╚██╗██║
╚██████╔╝╚██████╔╝██║  ██║██████╔╝╚██████╔╝██║ ╚████║
 ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝`;

const statusLines = [
  { label: "SYSTEM", value: "Portfolio v1.0 loaded", tone: "dim" },
  { label: "ROLE", value: profile.role, tone: "green" },
  { label: "FOCUS", value: "Agentic products + data tooling", tone: "green" },
  { label: "OPEN SOURCE", value: "5 featured builds", tone: "green" },
  { label: "GITHUB", value: "@ashuiGordon", tone: "green" },
  { label: "STATUS", value: "Building in public", tone: "amber" },
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      className={`term-section term-section--hero ${styles.hero}`}
      aria-labelledby="hero-title"
    >
      <div className={`term-container ${styles.container}`}>
        <div className={styles.heroBoot}>
          <div className={styles.content}>
            <div className={styles.avatar}>
              <Image
                className={styles.avatarImage}
                src={assetPath("/images/gordon-avatar.jpg")}
                alt="Portrait of Gordon"
                fill
                priority
                sizes="(max-width: 768px) 120px, 180px"
              />
              <span className={styles.avatarScanlines} aria-hidden="true" />
            </div>

            <div className={styles.asciiWrapper}>
              <pre className={styles.ascii} aria-hidden="true">
                {asciiName}
              </pre>
              <h1 id="hero-title" className="visually-hidden">
                Gordon
              </h1>
            </div>
          </div>

          <div className={styles.statusBlock} aria-label="Portfolio status">
            {statusLines.map(({ label, value, tone }) => (
              <div className={styles.statusLine} key={label}>
                <span className={styles.statusLabel}>{label}</span>
                <span className={styles.statusOk}>[OK]</span>
                <span
                  className={`${styles.statusValue} ${styles[tone]}`}
                >
                  {value}
                </span>
              </div>
            ))}

            <div className={styles.readyLine}>
              <span>System ready. Scroll to explore.</span>
              <span className={styles.cursor} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
