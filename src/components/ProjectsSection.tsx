"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { projects } from "@/data/portfolio";
import { assetPath } from "@/lib/base-path";
import type { PortfolioProject } from "@/types/portfolio";

import styles from "./ProjectsSection.module.css";

const PREVIEW_DELAY_MS = 150;

function PrivateProjectPlaceholder({
  reveal = false,
}: {
  reveal?: boolean;
}) {
  return (
    <div
      className={`${styles.privatePlaceholder} ${reveal ? styles.previewReveal : ""}`}
      role="img"
      aria-label="OpenScience private project terminal placeholder"
    >
      <div className={styles.placeholderBar} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.placeholderContent}>
        <p>
          <span className={styles.placeholderPrompt}>$</span> project status
          ./openscience
        </p>
        <p className={styles.placeholderStatus}>PRIVATE · IN DEVELOPMENT</p>
        <p className={styles.placeholderMuted}>
          public preview unavailable<span className={styles.placeholderCursor}>_</span>
        </p>
      </div>
    </div>
  );
}

function ProjectVisual({
  project,
  preview = false,
}: {
  project: PortfolioProject;
  preview?: boolean;
}) {
  if (!project.image) {
    return <PrivateProjectPlaceholder reveal={preview} />;
  }

  return (
    <Image
      className={`${styles.projectImage} ${preview ? styles.previewReveal : ""}`}
      src={assetPath(project.image)}
      alt={preview ? "" : project.imageAlt}
      fill
      sizes={preview ? "400px" : "(max-width: 768px) calc(100vw - 74px), 1080px"}
    />
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const year = project.createdAt.slice(0, 4);
  const isPrivate = project.status === "private";

  return (
    <article id={`project-${project.slug}`} className={styles.projectCard}>
      <header className={styles.cardHeader}>
        <p className={styles.readmePath}>$ cat ./{project.slug}/README.md</p>
        <p className={styles.cardYear}>{year}</p>
      </header>

      <div className={styles.cardBody}>
        <div className={`scanlined-image ${styles.cardImageFrame}`}>
          <ProjectVisual project={project} />
        </div>

        <div className={styles.cardMetadata} aria-label="Project metadata">
          <span className={styles.language}>{project.language}</span>
          {isPrivate ? (
            <span className={styles.privateBadge}>PRIVATE · IN DEVELOPMENT</span>
          ) : (
            <span
              className={styles.stars}
              title="GitHub stars captured as a point-in-time portfolio snapshot"
            >
              ★ {project.stars} stars · snapshot
            </span>
          )}
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectSummary}>{project.summary}</p>
        <p className={styles.projectDetail}>{project.detail}</p>

        <ul className={styles.tags} aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        {!isPrivate && project.links.length > 0 ? (
          <div className={styles.projectLinks} aria-label={`${project.title} links`}>
            {project.links.map((link) => (
              <a
                key={`${project.slug}-${link.label}`}
                className={`term-btn ${styles.projectLink}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
              >
                <span aria-hidden="true">[</span>
                {link.label}
                <span aria-hidden="true"> ↗]</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [previewProject, setPreviewProject] =
    useState<PortfolioProject | null>(null);
  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelPreviewTimer = () => {
    if (previewTimer.current !== null) {
      clearTimeout(previewTimer.current);
      previewTimer.current = null;
    }
  };

  const schedulePreview = (project: PortfolioProject) => {
    cancelPreviewTimer();
    setPreviewProject(null);
    previewTimer.current = setTimeout(() => {
      setPreviewProject(project);
      previewTimer.current = null;
    }, PREVIEW_DELAY_MS);
  };

  const dismissPreview = () => {
    cancelPreviewTimer();
    setPreviewProject(null);
  };

  useEffect(() => cancelPreviewTimer, []);

  return (
    <section id="projects" className="term-section" aria-labelledby="projects-heading">
      <div className="term-container term-container--wide">
        <h2 id="projects-heading" className="visually-hidden">
          Featured projects
        </h2>

        <div className="term-window">
          <header className="term-window__header">
            <div className="term-window__dots" aria-hidden="true">
              <span className="term-window__dot term-window__dot--red" />
              <span className="term-window__dot term-window__dot--yellow" />
              <span className="term-window__dot term-window__dot--green" />
            </div>
            <p className="term-window__title">gordon@portfolio: ~/projects</p>
          </header>

          <div className="term-window__body">
            <p className={`prompt ${styles.commandPrompt}`} aria-label="Command: ls -la">
              <span className="prompt__symbol" aria-hidden="true">
                $
              </span>
              <span className="prompt__command">ls -la</span>
            </p>

            <p className={styles.projectTotal}>total {projects.length} featured projects</p>

            <ol className={styles.fileList} aria-label="Project directory listing">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a
                    className={styles.fileRow}
                    href={`#project-${project.slug}`}
                    onMouseEnter={() => schedulePreview(project)}
                    onMouseLeave={dismissPreview}
                  >
                    <span className={styles.fileSource}>src</span>
                    <time className={styles.fileYear} dateTime={project.createdAt}>
                      {project.createdAt.slice(0, 4)}
                    </time>
                    <span className={styles.fileSlug}>{project.slug}/</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className={styles.cards}>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {previewProject ? (
        <aside
          key={previewProject.slug}
          className={`scanlined-image ${styles.hoverPreview}`}
          aria-hidden="true"
        >
          <ProjectVisual project={previewProject} preview />
          <p className={styles.previewCaption}>./{previewProject.slug}/preview</p>
        </aside>
      ) : null}
    </section>
  );
}
