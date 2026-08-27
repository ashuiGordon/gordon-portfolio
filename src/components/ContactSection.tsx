import { profile } from "@/data/portfolio";

import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`term-section ${styles.section}`}
      aria-labelledby="contact-heading"
    >
      <div className="term-container">
        <div className="term-window">
          <div className="term-window__header" aria-hidden="true">
            <div className="term-window__dots">
              <span className="term-window__dot term-window__dot--red" />
              <span className="term-window__dot term-window__dot--yellow" />
              <span className="term-window__dot term-window__dot--green" />
            </div>
            <div className="term-window__title">gordon@portfolio: ~/contact</div>
          </div>

          <div className="term-window__body">
            <div className={`prompt ${styles.prompt}`}>
              <span>
                <span className="prompt__user">gordon</span>
                <span className="prompt__at">@</span>
                <span className="prompt__host">portfolio</span>
              </span>
              <span className={styles.promptPathLine}>
                <span className="prompt__path">:~/contact</span>
                <span className="prompt__symbol">$</span>
              </span>
              <span className="prompt__command">cat ./links.txt</span>
            </div>

            <div className={styles.output}>
              <h2 id="contact-heading" className={styles.comment}>
                {"// Let's connect"}
              </h2>
              <div className={styles.linkRow}>
                <span className={styles.label}>EMAIL</span>
                <span aria-hidden="true">→</span>
                <a className="term-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className={styles.linkRow}>
                <span className={styles.label}>GITHUB</span>
                <span aria-hidden="true">→</span>
                <a
                  className="term-link"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{profile.githubHandle}
                </a>
              </div>
            </div>

            <div className={`prompt ${styles.finalPrompt}`} aria-hidden="true">
              <span>
                <span className="prompt__user">gordon</span>
                <span className="prompt__at">@</span>
                <span className="prompt__host">portfolio</span>
              </span>
              <span className={styles.promptPathLine}>
                <span className="prompt__path">:~/contact</span>
                <span className="prompt__symbol">$</span>
              </span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
