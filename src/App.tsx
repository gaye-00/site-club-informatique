import { useState, useEffect } from "react";
import LoadingSpinner from "./components/common/LoadingSpinner";
import Layout from "./components/common/Layout/Layout";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EvenementPage from "./pages/EvenementPage";
import ScrollToTopButton from "./components/common/ScrollToTopButton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement initial de l'application
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 secondes de chargement

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <HomePage /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/evenement" element={<EvenementPage />} />
        </Routes>
      </Layout>

      {/* Bouton Scroll To Top Global - Visible partout dans l'app */}
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
