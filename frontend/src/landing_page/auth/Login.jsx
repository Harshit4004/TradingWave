import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/api";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: name === "email" ? value.trim() : value,
    }));
  };

  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message, {
        position: "top-right",
        autoClose: 2000,
      });

      // Clear the state so the toast doesn't appear again
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const params = new URLSearchParams(window.location.search);
  const message = params.get("message");

  if (message) {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
    });

    // Remove ?message=... from URL
    window.history.replaceState({}, "", "/login");
  }

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
      autoClose: 2000,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions

    setLoading(true);
    try {
      const { data } = await api.post("/api/auth/login", inputValue);
      const { success, message } = data;

      if (success) {
        setInputValue({
          email: "",
          password: "",
        });

        navigate("/tick");
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container position-top">
        <div className="row">
          <h1 className="fs-4 mt-5 pt-5 text-center">
            Open a free demat and trading account online
          </h1>
          <p className="fs-5 mt-3 text-muted text-center px-4">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
          <div className="col-lg-7 col-md-12 mt-5 px-4">
            <img
              src="/media/images/account_open.svg"
              alt="Trading account illustration"
            />
          </div>
          <div className="col-lg-5 col-md-12 mt-5 pt-3 ps-5">
            <h1 className="fs-4 ">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group flex-nowrap mt-4 w-75 small">
                <span className="input-group-text text-muted ">
                  <i className="fa-solid fa-envelope" id="auth-icon"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  autoComplete="email"
                  value={email}
                  placeholder="Email"
                  className="form-control"
                  aria-label="Email"
                  onChange={handleOnChange}
                  autoFocus
                  required
                />
              </div>
              <div className="input-group flex-nowrap mt-3 w-75 ">
                <span className="input-group-text text-muted small">
                  <i className="fa-solid fa-lock" id="auth-icon"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  disabled={loading}
                  autoComplete="current-password"
                  minLength="8"
                  value={password}
                  placeholder="Password"
                  className="form-control rounded-end-2"
                  aria-label="Password"
                  onChange={handleOnChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle rounded-1"
                >
                  {showPassword ? (
                    <VisibilityOutlined sx={{ color: "grey" }} />
                  ) : (
                    <VisibilityOffOutlined sx={{ color: "grey" }} />
                  )}
                </button>
              </div>
              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="btn mt-4 px-5 fw all-btns auth-btn"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <ToastContainer />
            <p className="text-muted mt-2">
              Already have an account ?{" "}
              <Link
                className="signup-link fw-medium"
                style={{ cursor: "pointer" }}
                to="/signup"
              >
                Signup
              </Link>
            </p>
            <p className="text-muted mt-2" style={{ fontSize: "10px" }}>
              By proceeding, you agree to the TradingWave terms & privacy policy
            </p>
          </div>
          <h2 className="text-center mt-5 fs-4 px-4">
            Already have a demat account?
          </h2>
          <p className="text-center text-muted mt-3 mb-5 px-5">
            Move your holdings to TradingWave and we'll cover your transfer
            costs, up to ₹500, learn more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
