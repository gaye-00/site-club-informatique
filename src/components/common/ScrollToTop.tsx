import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Composant qui remonte automatiquement en haut de la page
 * lors de chaque changement de route
 *
 * À placer dans App.tsx juste après <Router> ou <BrowserRouter>
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonter en haut de la page instantanément
    window.scrollTo(0, 0);

    // Alternative avec comportement smooth (défilement doux)
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
