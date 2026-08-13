import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }

    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth" });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
