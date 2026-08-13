import "../css/pages/about.css";

function AboutPage() {
  return (
    <div className="page narrow about-page">
      <p className="eyebrow">Om mig</p>
      <h1>Hvem er jeg?</h1>
      <p className="lead">
        Jeg er frontend-udvikler under uddannelse. Jeg bygger webprojekter
        med fokus på ren kode, gode brugeroplevelser og et iøjnefaldende
        design.
      </p>

      <div className="about-columns" aria-label="Om mig detaljer">
        <div className="about-column">
          <h3>Jeg arbejder med</h3>
          <p>React, HTML, CSS, JavaScript, designproces og digitale produkter.</p>
        </div>
        <div className="about-column">
          <h3>Jeg er nysgerrig på</h3>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til
            noget brugbart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
