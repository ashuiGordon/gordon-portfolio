import { profile } from "@/data/portfolio";

import styles from "./AboutSection.module.css";

const focusAreas = [
  "Agentic Product Workflows",
  "Developer Tools & CLI",
  "Data Analysis & Modeling",
  "Multi-agent Systems & MCP",
  "Browser Automation & Retrieval",
  "Full-stack Prototyping",
];

function Prompt({ command, path }: { command: string; path: string }) {
  return (
    <div className={`prompt ${styles.prompt}`} aria-label={`${path} ${command}`}>
      <span>
        <span className="prompt__user">gordon</span>
        <span className="prompt__at">@</span>
        <span className="prompt__host">portfolio</span>
      </span>
      <span className={styles.promptPathLine}>
        <span className="prompt__path">:{path}</span>
        <span className="prompt__symbol">$</span>
      </span>
      <span className="prompt__command">{command}</span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className={`term-section ${styles.section}`}
      aria-labelledby="about-heading"
    >
      <div className="term-container">
        <div className={`term-window ${styles.window}`}>
          <div className="term-window__header" aria-hidden="true">
            <div className="term-window__dots">
              <span className="term-window__dot term-window__dot--red" />
              <span className="term-window__dot term-window__dot--yellow" />
              <span className="term-window__dot term-window__dot--green" />
            </div>
            <div className="term-window__title">gordon@portfolio: ~/about</div>
          </div>

          <div className="term-window__body">
            <Prompt command="whoami" path="~/about" />
            <div className={styles.output}>
              <h2 id="about-heading" className={styles.name}>
                {profile.name}
              </h2>
              <p className={styles.role}>{profile.role}</p>
              <div className={styles.comments}>
                <p>{"// I design agentic workflows from first principles"}</p>
                <p>{"// I prototype across product, data, and code"}</p>
                <p>{"// I make ideas inspectable through open source"}</p>
              </div>
            </div>

            <Prompt command="cat ./focus.txt" path="~/about" />
            <ul className={`${styles.output} ${styles.indented} ${styles.focusList}`}>
              {focusAreas.map((area) => (
                <li key={area}>
                  <span aria-hidden="true">→</span> {area}
                </li>
              ))}
            </ul>

            <Prompt command="cat ./working-style.txt" path="~/about" />
            <div className={`${styles.output} ${styles.indented} ${styles.background}`}>
              <p>From workflow research to testable, runnable prototypes</p>
              <p>Product judgment, systems thinking, and hands-on delivery</p>
              <p>Evidence first, then narrative</p>
              <p className={styles.finalComment}>
                {"// Curious by default; rigorous when it counts."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
