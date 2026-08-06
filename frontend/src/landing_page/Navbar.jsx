import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="navBar-image"
            src="media\images\TradingWave_logo.jpeg"
            alt="Logo"
            style={{ width: "11rem" }}
          />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarSupportedContent"
          // style={{ marginLeft: "38%" }}
        >
          <ul className="navbar-nav ms-auto mb-lg-0 mt-2">
            <li className="nav-item text-muted">
              <Link
                to="/signup"
                className={`nav-link ${
                  selectedMenu === 0 ? activeMenuClass : menuClass
                }`}
                onClick={() => handleMenuClick(0)}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  selectedMenu === 1 ? activeMenuClass : menuClass
                }`}
                onClick={() => handleMenuClick(1)}
              >
                  About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className={`nav-link ${
                  selectedMenu === 2 ? activeMenuClass : menuClass
                }`}
                onClick={() => handleMenuClick(2)}
              >
                  Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/pricing"
                className={`nav-link ${
                  selectedMenu === 3 ? activeMenuClass : menuClass
                }`}
                onClick={() => handleMenuClick(3)}
              >
                  Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className={`nav-link ${
                  selectedMenu === 4 ? activeMenuClass : menuClass
                }`}
                onClick={() => handleMenuClick(4)}
              >
                  Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
