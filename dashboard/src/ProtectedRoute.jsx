import { Navigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import GeneralContext from "./Components/GeneralContext";
import api from "./api/api";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(null);
  const { setUser } = useContext(GeneralContext);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await api.get("/api/auth/me");

        if (data.status) {
          setAuthenticated(true);
          setUser(data.user);
        }
      } catch (error) {
        console.error("Authentication verification failed:", error);
        setAuthenticated(false);
        setUser(null);
        toast.error(
          error.response?.data?.message ||
            "Session expired. Please login again.",
        );
      }
    };

    verifyUser();
  }, [setUser]);

  if (authenticated === null) {
    return (
      <div className="text-center mt-5">
        <span className="spinner-border"></span>
      </div>
    );
  }

  if (!authenticated) {
    window.location.replace(`${import.meta.env.VITE_LOGIN_URL}/login`);
    return null;
  }

  return children;
}

export default ProtectedRoute;
