import { Routes, Route } from "react-router-dom";
import MainLayout from "./landing_page/MainLayout";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/auth/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Tick from "./landing_page/Tick/Tick";
import Login from "./landing_page/auth/Login";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import "react-toastify";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <ToastContainer /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/tick" element={<Tick />} />
      </Routes>
    </>
  );
}

export default App;
