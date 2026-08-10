import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/api";

function NavBar({ username }) {
  const navigate = useNavigate();

  const formattedUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : "";

  const Logout = async () => {
    try {
      const { data } = await api.post("/api/auth/logout", { username });
      if (data.success) {
        localStorage.removeItem("user");

        navigate("/login", {
          state: {
            message: data.message,
          },
        });
      }
    } catch (err) {
      toast.error("Failed to logout. Please try again.", {
        position: "top-right",
        autoClose: 1500,
      });

      console.error(err);
    }
  };
  return (
    <nav className="navbar border-bottom">
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          <img
            src="/media/images/TradingWave_logo.jpeg"
            alt="logo"
            style={{ width: "9rem" }}
          />
        </a>
        <ul className="dropdown kite-dropdown list-unstyled">
          <li className="nav-item dropdown kite-navbar-profile">
            <a
              className="nav-link d-flex align-items-center pt-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="avatar me-2">
                {username?.charAt(0).toUpperCase()}
              </div>

              <span className="d-none d-sm-inline">{formattedUsername}</span>
            </a>

            <ul
              className="dropdown-menu dropdown-menu-end kite-navbar text-muted mt-2"
              style={{ fontSize: ".85rem", padding: 0 }}
            >
              <li className="d-flex dropdown-item"  >
                <div className="avatar ms-2">
                  {username?.charAt(0).toUpperCase()}
                </div>
                <div className="dropdown-username mt-1">
                  <a className="text-decoration-none" href="#">
                    {formattedUsername}
                  </a>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item fw-medium kite-navbar-btn" href="#">
                  <i className="fa-regular fa-circle-question"></i> Need help?
                </a>
              </li>

              <li>
                <a className="dropdown-item fw-medium kite-navbar-btn" href="#">
                  <i className="fa-solid fa-phone"></i> Contact us
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item fw-medium kite-navbar-btn logout"
                  onClick={Logout}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
