import "../css/pages/about.css";

function AboutPage() {
  return (
    <div className="page about-page">
      <h1 className="eyebrow">Om mig</h1>

      <div className="about-layout">
        <img
          alt="Collage af billeder af Sebastian i form af et logo"
          className="about-photo"
          src={`${import.meta.env.BASE_URL}logopicture.svg`}
        />
        <div className="about-text">
          <p>
            Jeg er Sebastian, frontend-udvikler under uddannelse. Jeg bygger
            webprojekter med fokus på ren kode, gode brugeroplevelser og et
            iøjnefaldende design.
          </p>
          <p>
            Jeg arbejder med React, HTML, CSS, JavaScript, designproces og
            digitale produkter — og er nysgerrig på brugeroplevelser, visuel
            identitet og hvordan kode bliver til noget brugbart.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
