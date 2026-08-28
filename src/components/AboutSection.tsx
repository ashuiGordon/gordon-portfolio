import { profile } from "@/data/portfolio";

import styles from "./AboutSection.module.css";

const focusAreas = [
  "Agent Harness & Execution Systems",
  "Agentic Workflow Productization",
  "Multi-agent Orchestration & Tool Ecosystems",
  "Context, State & Tool Integration",
  "Developer Tools & Open-source Prototyping",
  "Data & Research Workflows",
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
              <p className={styles.role}>
                AI Product Manager building agentic products — from workflow
                design to the harness layer behind reliable execution.
              </p>
              <div className={styles.comments}>
                <p>{"// I turn fragmented workflows into clear product systems"}</p>
                <p>{"// I design execution around context, tools, state, and feedback"}</p>
                <p>{"// I build working prototypes to make product decisions testable"}</p>
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
              <p>Start from where real workflows lose context, control, or continuity.</p>
              <p>Turn execution bottlenecks into explicit product mechanisms and boundaries.</p>
              <p>Prototype across product, data, and code to expose failure modes and trade-offs.</p>
              <p>Iterate toward agent systems that are reliable, controllable, and reusable.</p>
              <p className={styles.finalComment}>
                {"// Evidence before narrative. Working systems before slides."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
