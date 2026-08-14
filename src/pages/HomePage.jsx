import { useEffect, useRef } from "react";
import { Link } from "react-router";
import projects from "../data/projects";
import "../css/pages/home.css";

const floatingLogos = [
  { src: "react.svg", alt: "React", className: "hero-float-1" },
  { src: "css.svg", alt: "CSS", className: "hero-float-2" },
  { src: "html.svg", alt: "HTML", className: "hero-float-3" },
  { src: "javascript.svg", alt: "JavaScript", className: "hero-float-4" },
  { src: "figma.svg", alt: "Figma", className: "hero-float-5" },
  { src: "github.svg", alt: "GitHub", className: "hero-float-6" },
  { src: "photoshop.svg", alt: "Photoshop", className: "hero-float-7" },
  { src: "vscode.svg", alt: "VS Code", className: "hero-float-8" },
];

function HomePage() {
  const projectListRef = useRef(null);

  useEffect(() => {
    const items = projectListRef.current?.querySelectorAll(".project-feature");
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page home-page">
      <section className="hero-section">
        <div aria-hidden="true" className="hero-float-icons">
          {floatingLogos.map((logo) => (
            <img
              alt={logo.alt}
              className={`hero-float-icon ${logo.className}`}
              key={logo.src}
              src={`${import.meta.env.BASE_URL}${logo.src}`}
            />
          ))}
        </div>

        <div className="hero-portrait">
          <img
            alt=""
            className="hero-portrait-image"
            src={`${import.meta.env.BASE_URL}selveste.svg`}
          />
          <h1 className="hero-portrait-label">Sebastian</h1>
        </div>
        <p className="hero-tagline">
          Frontend-udvikler og designer under uddannelse.
        </p>

        <a
          className="hero-scroll-cue"
          href="#projekter"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("projekter")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Se mere
          <span aria-hidden="true" className="hero-scroll-cue-arrow">
            ↓
          </span>
        </a>
      </section>

      <section className="projects-section" id="projekter">
        <div className="section-heading">
          <p className="eyebrow">Projekter</p>
          <h2>Mine projekter</h2>
        </div>

        <div className="project-feature-list" aria-label="Projektliste" ref={projectListRef}>
          {projects.map((project) => (
            <article className="project-feature" key={project.slug}>
              {project.caseNumber && (
                <p className="project-feature-case">
                  Case {String(project.caseNumber).padStart(2, "0")}
                </p>
              )}
              <div className="project-feature-media">
                <img src={project.image} alt={`Preview af ${project.title}`} />
              </div>
              <div className="project-feature-content">
                {project.logos && project.logos.length > 0 && (
                  <div className="project-feature-logos">
                    {project.logos.map((logo) => (
                      <img
                        alt={`${project.title} logo`}
                        className="project-feature-logo"
                        key={logo}
                        src={logo}
                      />
                    ))}
                  </div>
                )}
                <h3>{project.title}</h3>
                <p className="project-feature-year">{project.year}</p>
                <ul className="project-feature-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link className="project-feature-link" to={`/projects/${project.slug}`}>
                  Se projekt →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
