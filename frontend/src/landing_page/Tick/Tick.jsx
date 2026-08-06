import Hero from "./Hero.jsx";
import Universe from "./Universe.jsx";
import NavBar from "./NavBar.jsx";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/api";

function Kite() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await api.get("/api/auth/me");
        const { status, user } = data;
        if (!status || !user?.username) {
          navigate("/login");
          return;
        }
        setUsername(user.username);
        const formattedUsername =
          user.username.charAt(0).toUpperCase() + user.username.slice(1);

        toast(`Hello ${formattedUsername}`, {
          position: "top-right",
          autoClose: 1500,
        });
      } catch (err) {
        toast.error("Session expired. Please login again.", {
          position: "top-right",
          autoClose: 2000,
        });

        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    verifyCookie();
  }, [navigate]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <span className="spinner-border"></span>
      </div>
    );
  }

  return (
    <>
      <NavBar username={username} />
      <Hero />
      <ToastContainer />
      <Universe />
    </>
  );
}

export default Kite;
