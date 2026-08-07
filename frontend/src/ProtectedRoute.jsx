import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await api.get("/api/auth/me");

        if (data.status) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;