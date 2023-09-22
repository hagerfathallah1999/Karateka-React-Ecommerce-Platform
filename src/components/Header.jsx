import { Link, NavLink, useNavigate } from "react-router-dom";
import CartIcon from "./../assets/icons/CartIcon";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header({ noOfItemsInCart, user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    // Perform logout actions, such as clearing user data
    setUser({ isAuthenticated: false, role: "" });

    // Navigate to the desired URL after logout
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="navbar fixed top-0 left-0 right-0 bg-white bg-opacity-30 text-black z-50  md:text-sm lg:text-lg">
        <div className="w-11/12  m-auto">
          <div className="navbar-start flex justify-start items-center gap-3">
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/menu"
            >
              <img
                src="../src/assets/Imgs/ProductsIcon.png"
                alt="ProductsIcon"
                className="w-4 md:w-6 lg:hidden"
              />
              <span className="hidden lg:block font-mono">PRODUCTS</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/about"
            >
              <span className="hidden lg:block font-mono">ON SALE</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/about"
            >
              <span className="hidden lg:block font-mono">FIND A STORE</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/about"
            >
              <span className="hidden lg:block font-mono">VIDEOS</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/about"
            >
              <span className="hidden lg:block font-mono">ABOUT US</span>
            </NavLink>
          </div>

          <div className="navbar-center">
            <img
              className="h-12 md:h-14 lg:h-16 "
              src="src\assets\Imgs\HeaderLogo\FinalLogo03.png"
              alt="Karateka Logo"
            />
          </div>

          <div className="navbar-end flex justify-end items-center gap-3">
            <NavLink
              className={({ isActive }) => (isActive ? "font-bold" : "")}
              to="/"
            >
              <span className="hidden lg:block font-mono">Home</span>
            </NavLink>

            {!user.isAuthenticated && (
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                to="/register"
              >
                <span className="hidden lg:block font-mono">Register</span>
              </NavLink>
            )}

            {!user.isAuthenticated && (
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                to="/login"
              >
                <span className="hidden lg:block font-mono"> / Login</span>
              </NavLink>
            )}

            {user.isAuthenticated && user.role === "admin" && (
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                to="/admin"
              >
                <span className="hidden lg:block font-mono"> Admin</span>
              </NavLink>
            )}

            {user.isAuthenticated && (
              <NavLink
                className={({ isActive }) => (isActive ? "font-bold" : "")}
                to="/"
                onClick={handleLogout}
              >
                <span className="w-4 md:w-6 hidden lg:block font-mono">
                  {" "}
                  Logout
                </span>
              </NavLink>
            )}

            <div className="mr-3 ml-5 pt-2">
              <ThemeSwitcher />
            </div>

            <div className="relative">
              <Link to="/cart">
                <CartIcon />
              </Link>
              <div
                className={
                  noOfItemsInCart != 0
                    ? "absolute -top-2 -right-3 badge badge-xs bg-black text-wight"
                    : ""
                }
              >
                {noOfItemsInCart != 0 && noOfItemsInCart}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
