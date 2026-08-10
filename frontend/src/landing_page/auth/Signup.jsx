import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/api";
import {
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

function Signup() {
  const navigate = useNavigate();
  // Signup
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
      autoClose: 2000,
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 2000,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await api.post("/api/auth/signup", {
        ...inputValue,
      });
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({
          email: "",
          password: "",
          username: "",
        });
        setTimeout(() => {
          navigate("/tick");
        }, 1000);
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
      <ToastContainer />
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
            <h1 className="fs-4 ">Signup now</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group flex-nowrap mt-3 w-75">
                <span className="input-group-text text-muted">
                  <i className="fa-solid fa-at" id="auth-icon"></i>
                </span>
                <input
                  type="text"
                  name="username"
                  disabled={loading}
                  value={username}
                  placeholder="username"
                  className="form-control"
                  aria-label="Username"
                  onChange={handleOnChange}
                  autoFocus
                  required
                />
              </div>
              <div className="input-group flex-nowrap mt-3 w-75 small">
                <span className="input-group-text text-muted ">
                  <i className="fa-solid fa-envelope" id="auth-icon"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  disabled={loading}
                  value={email}
                  placeholder="Email"
                  className="form-control"
                  aria-label="Email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="input-group flex-nowrap mt-3 w-75">
                <span className="input-group-text text-muted small">
                  <i className="fa-solid fa-lock" id="auth-icon"></i>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  disabled={loading}
                  minLength="8"
                  value={password}
                  placeholder="Password"
                  className="form-control  rounded-end-2"
                  aria-label="Password"
                  onChange={handleOnChange}
                  required
                />
                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="password-toggle"
                                  style={{borderRadius:""}}
                                >
                                  {showPassword ? <VisibilityOutlined sx={{ color: "grey" }} /> : < VisibilityOffOutlined sx={{ color: "grey" }}/>}
                                </button>
              </div>
              <button
                type="submit"
                className="btn mt-4 px-5 all-btns auth-btn"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      aria-hidden="true"
                    />
                    Creating account...
                  </>
                ) : (
                  "Signup"
                )}
              </button>
            </form>
            <p className="text-muted mt-2">
              If you already have an account ?{" "}
              <Link
                className="signup-link fw-medium"
                style={{ cursor: "pointer" }}
                to="/login"
              >
                Login
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

export default Signup;
