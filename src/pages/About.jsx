import { useContext } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get("sort"));
  // console.log(searchParams.getAll("sortby"));

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
