import "../css/pages/about.css";

function AboutPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">Om mig</p>
      <h1>Hvem er jeg?</h1>
      <p className="lead">
        Jeg er frontend-udvikler under uddannelse. Jeg bygger
        webprojekter med fokus på ren kode, gode brugeroplevelser og et design der er i øjnfangende.
      </p>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>Jeg arbejder med</h2>
          <p>
            React, HTML, CSS, JavaScript, designproces og digitale produkter.
          </p>
        </div>
        <div>
          <h2>Jeg er nysgerrig på</h2>
          <p>
            Brugeroplevelser, visuel identitet og hvordan kode bliver til noget
            brugbart.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
