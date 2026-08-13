import "../css/components/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-contact">
        <a href="mailto:sebastian.galthen@gmail.com">
          sebastian.galthen@gmail.com
        </a>
        <a href="https://github.com/Sebbbenator" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sebastian-galthen-a88516347/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>

      <img
        alt="Sebastian"
        className="footer-logo"
        src={`${import.meta.env.BASE_URL}logo.svg`}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <p className="footer-year">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
