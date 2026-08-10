import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import api from ".././api/api";
import { toast } from "react-toastify";

function Menu() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user } = useContext(GeneralContext);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const username = user?.username || "User";
  const firstLetter = username.charAt(0).toUpperCase();
  const displayUsername = username.charAt(0).toUpperCase() + username.slice(1);

  const Logout = async () => {
    try {
      const { data } = await api.post("/api/auth/logout");
      if (data.success) {
        localStorage.removeItem("user");

        const loginUrl = import.meta.env.VITE_LOGIN_URL;

        window.location.href = `${loginUrl}/login?message=${encodeURIComponent(
          data.message || "Logged out successfully",
        )}`;
      }
    } catch (err) {
      toast.error("Failed to logout. Please try again.", {
        position: "top-right",
        autoClose: 1500,
      });

      console.error(err);
    } finally {
  setIsProfileDropdownOpen(false);
}
  };

  return (
    <>
      <div className="menu-container">
        <img src="logo_Tick.jpeg" alt="Logo" style={{ width: "40px" }} />
        <div className="menus">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/holdings"
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Holdings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/positions"
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Positions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/funds"
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Funds
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "menu selected" : "menu"
                }
              >
                Apps
              </NavLink>
            </li>
          </ul>
          <hr />
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{firstLetter}</div>
            <p className="username">{displayUsername}</p>
            <span className="dropdown-arrow">
              {isProfileDropdownOpen ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>
          {isProfileDropdownOpen && (
            <div
              className={`profile-dropdown ${isProfileDropdownOpen ? "dropdown-open" : "dropdown-close"}`}
            >
              <div className="dropdown-user">
                <div className="dropdown-avatar">{firstLetter}</div>

                <div>
                  <strong>{displayUsername}</strong>
                  <small>{user?.email}</small>
                </div>
              </div>

              <hr />

              <Link
                to=""
                className="dropdown-item"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                <i className="fa-regular fa-circle-question"></i> Need help?
              </Link>

              <Link
                to=""
                className="dropdown-item"
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                <i className="fa-solid fa-phone"></i> Contact us
              </Link>
              <hr />

              <button className="dropdown-item logout" onClick={Logout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
