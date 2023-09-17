import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = ({ setUser }) => {
  let navigate = useNavigate();

  const handleSubmitLoginUser = async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.get("http://localhost:3000/users");

      const loggedInUser = data.find(
        (user) =>
          user.email === e.target[0].value &&
          user.password === e.target[1].value
      );

      if (loggedInUser) {
        if (loggedInUser.role === "admin") {
          submitAdminLogin();
        } else {
          submitUserLogin();
        }
      } else {
        rejectLogin();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitAdminLogin = () => {
    toast.success("Admin Login Success!");
    setUser({ isAuthenticated: true, role: "admin" });
    navigate("/admin");
  };

  const submitUserLogin = () => {
    toast.success("User Login Success!");
    setUser({ isAuthenticated: true, role: "user" });
    navigate("/");
  };

  const rejectLogin = () => {
    toast.error("Invalid login, please try again...");
  };

  return (
    <>
      <div>
        <div>
          <img
            className="w-screen h-screen relative"
            src="src\assets\Imgs\LoginRegisterBgImg.webp"
            alt=""
          />

          <div className="absolute hidden lg:block left-40 top-1/3">
            /<p className="font-semibold text-3xl">Welcome to.</p>
            <p className="font-bold text-9xl text-primary">KARATEKA</p>
            <p className="font-semibold text-3xl">Store...</p>
          </div>

          <div className="absolute top-1/3 left-16 xs:left-28 sm:left-52 lg:left-3/4">
            <form onSubmit={handleSubmitLoginUser}>
              <div className="form-control w-full max-w-xs">
                <label htmlFor="email" className="label">
                  <span className="label-text font-bold text-lg text-gray-600">Email</span>
                </label>
                <input
                  id="email"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />

                <label htmlFor="password" className="label">
                  <span className="label-text font-bold text-lg text-gray-600">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />

                <button className="btn btn-primary mt-3" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
