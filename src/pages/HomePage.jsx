import { Link } from "react-router";
import projects from "../data/projects";
import "../css/pages/home.css";

function HomePage() {
  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Portfolio</p>
        <h1>Hej, jeg hedder Sebastian.</h1>
        <p className="hero-text">
          Jeg er frontend-udvikler og arbejder med React, HTML, CSS og
          JavaScript. Her samler jeg projekter, proces og det, jeg lærer
          undervejs.
        </p>
        <div className="actions">
          <a className="button" href="#projekter">
            Se projekter
          </a>
          <Link className="button secondary" to="/contact">
            Kontakt mig
          </Link>
        </div>
      </section>

      <section className="section" id="om-mig">
        <div className="section-heading">
          <p className="eyebrow">Om mig</p>
          <h2>Hvem er jeg?</h2>
        </div>
        <p className="lead">
          Jeg er frontend-udvikler under uddannelse. Jeg bygger webprojekter
          med fokus på ren kode, gode brugeroplevelser og et iøjnefaldende
          design.
        </p>

        <div className="info-list" aria-label="Om mig detaljer">
          <div>
            <h3>Jeg arbejder med</h3>
            <p>
              React, HTML, CSS, JavaScript, designproces og digitale
              produkter.
            </p>
          </div>
          <div>
            <h3>Jeg er nysgerrig på</h3>
            <p>
              Brugeroplevelser, visuel identitet og hvordan kode bliver til
              noget brugbart.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="projekter">
        <div className="section-heading">
          <p className="eyebrow">Projekter</p>
          <h2>Mine projekter</h2>
        </div>

        <div className="project-grid" aria-label="Projektliste">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tag-list">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
