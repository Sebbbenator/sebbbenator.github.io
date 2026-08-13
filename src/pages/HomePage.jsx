import { Link } from "react-router";
import projects from "../data/projects";
import "../css/pages/home.css";

function HomePage() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <h1>Sebastian</h1>
        <p className="hero-tagline">
          Frontend-udvikler og designer under uddannelse.
        </p>
      </section>

      <section className="projects-section" id="projekter">
        <div className="section-heading">
          <p className="eyebrow">Projekter</p>
          <h2>Mine projekter</h2>
        </div>

        <div className="project-feature-list" aria-label="Projektliste">
          {projects.map((project) => (
            <article className="project-feature" key={project.slug}>
              <div className="project-feature-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link className="project-feature-link" to={`/projects/${project.slug}`}>
                  Se projekt →
                </Link>
              </div>
              <div className="project-feature-media">
                <img src={project.image} alt={`Preview af ${project.title}`} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
