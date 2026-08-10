import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "menu selected" : "menu"}`;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-5 sticky-top navbar-for-phone">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="navBar-image"
            src="media\images\TradingWave_logo.jpeg"
            alt="Logo"
            style={{ width: "10rem" }}
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
              <NavLink to="/signup" className={navClass}>
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className={navClass}>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/pricing" className={navClass}>
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className={navClass}>
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
