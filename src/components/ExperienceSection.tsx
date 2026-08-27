import Image from "next/image";

import { internships } from "@/data/portfolio";
import { assetPath } from "@/lib/base-path";

import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`term-section term-section--compact ${styles.section}`}
      aria-labelledby="experience-heading"
    >
      <div className={`term-container ${styles.container}`}>
        <h2 id="experience-heading" className="visually-hidden">
          Internship experience
        </h2>

        <div className={`term-window ${styles.window}`}>
          <div className={`term-window__header ${styles.header}`}>
            <div className="term-window__dots" aria-hidden="true">
              <span className="term-window__dot term-window__dot--red" />
              <span className="term-window__dot term-window__dot--yellow" />
              <span className="term-window__dot term-window__dot--green" />
            </div>
            <div className="term-window__title">
              gordon@portfolio: ~/experience
            </div>
          </div>

          <div className={`term-window__body ${styles.body}`}>
            <div className={`prompt ${styles.prompt}`}>
              <span className={styles.promptIdentity}>
                <span className="prompt__user">gordon</span>
                <span className="prompt__at">@</span>
                <span className="prompt__host">portfolio</span>
              </span>
              <span className={styles.promptLocation}>
                <span className="prompt__path">:~/experience</span>
                <span className="prompt__symbol">$</span>
              </span>
              <span className="prompt__command">cat ./internships.txt</span>
            </div>

            <ol className={styles.list} aria-label="Internships in reverse chronological order">
              {internships.map((internship) => {
                const headingId = `internship-${internship.id}`;

                return (
                  <li key={internship.id} className={styles.listItem}>
                    <article
                      className={styles.row}
                      aria-labelledby={headingId}
                    >
                      <div className={styles.logoFrame}>
                        <div className={`${styles.logoChip} ${styles.logoChipNeutral}`}>
                          <Image
                            className={styles.logo}
                            src={assetPath(internship.logo)}
                            alt={`${internship.company} company logo`}
                            width={112}
                            height={52}
                          />
                        </div>
                      </div>

                      <div className={styles.identity}>
                        <h3 id={headingId} className={styles.company}>
                          <span>{internship.company}</span>
                          <span className={styles.companySeparator}> / </span>
                          <span lang="zh-CN">{internship.companyZh}</span>
                        </h3>
                        <div className={styles.metadata}>
                          <time>{internship.period}</time>
                          {internship.team ? (
                            <span className={styles.team}>
                              team: {internship.team}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className={styles.details}>
                        <p className={styles.role}>
                          <span className={styles.roleMarker} aria-hidden="true">
                            →
                          </span>
                          <span>{internship.role}</span>
                        </p>
                        <p className={styles.summary}>{internship.summary}</p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
