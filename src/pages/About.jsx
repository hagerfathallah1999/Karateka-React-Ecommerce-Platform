import { useContext } from "react";
import {
  Outlet,
  useNavigate,
} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <h1>About</h1>
      <button
        onClick={goToHome}
        className={`btn ${
          theme === "light" ? "btn-secondary" : "bg-slate-400"
        }`}
      >
        Go To Home - {theme}
      </button>
      <Outlet />
    </>
  );
}
