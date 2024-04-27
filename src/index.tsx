import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import "./index.css";
import theme from "./flowbite-theme";
import { Flowbite } from "flowbite-react";
import DashboardPage from "./pages";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceProductsPage from "./pages/e-commerce/products";
import UserListPage from "./pages/users/list";
import TouristeListPage from "./pages/users/touriste";
import PresidentListPage from "./pages/users/president";
import DestinationListPage from "./pages/users/destination";
import ExpressionLocaleListPage from "./pages/expression_locale/expression_locale";
import HebergementListPage from "./pages/hebergement/hebergement";
import RestaurantListPage from "./pages/restaurant/restaurant";
import EvenementListPage from "./pages/evenement/evenement";

const container = document.getElementById("root");

if (!container) {
  throw new Error("React root element doesn't exist!");
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme }}>
      <Router> {/* Envelopper tout avec Router */}
        <Routes>
          <Route path="/" element={<DashboardPage />} index />
          <Route path="/authentication/sign-in" element={<SignInPage />} />
          <Route path="/authentication/sign-up" element={<SignUpPage />} />
          <Route
            path="/e-commerce/products"
            element={<EcommerceProductsPage />}
          />
          <Route path="/users/list" element={<UserListPage />} />
          <Route path="/users/president" element={<PresidentListPage />} />
          <Route path="/users/destination" element={<DestinationListPage />} />
          <Route path="/expression_locale" element={<ExpressionLocaleListPage />} />
          <Route path="/hebergement" element={<HebergementListPage />} />
          <Route path="/restaurant" element={<RestaurantListPage />} />
          <Route path="/evenement" element={<EvenementListPage />} />
          <Route path="/users/touriste" element={<TouristeListPage />} 
          />
        </Routes>
      </Router> {/* Fin de Router */}
    </Flowbite>
  </StrictMode>
);
