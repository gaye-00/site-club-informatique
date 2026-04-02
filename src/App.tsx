import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Layout from "./components/common/Layout/Layout";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import HomePage from "./pages/HomePage";
import EvenementPage from "./pages/EvenementPage";
import SouvenirPage from "./pages/SouvenirPage";
import AProposPage from "./pages/AProposPage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement initial de l'application
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconde de chargement

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/evenement" element={<EvenementPage />} />
          <Route path="/souvenir" element={<SouvenirPage />} />
          <Route path="/apropos" element={<AProposPage />} />
        </Routes>
      </Layout>

      {/* Bouton Scroll To Top Global - Visible partout dans l'app */}
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
