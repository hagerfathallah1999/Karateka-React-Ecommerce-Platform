import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { object, string } from "yup";

const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const emailRules = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function fetchUserList() {
      try {
        const { data } = await axios.get("http://localhost:3000/users");
        setUserList(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUserList();
  }, []);

  const formSchema = object({
    email: string().matches(emailRules, "Invalid email format").required(),
    password: string()
      .matches(passwordRules, {
        message: "Please create a stronger password!",
      })
      .required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await formSchema.validate(
        { email, password },
        { abortEarly: false }
      );

      const registeredUser = userList.find((user) => user.email === email);

      if (registeredUser) {
        toast.error("Email already registered!");
      } else {
        await axios.post("http://localhost:3000/users", {
          email,
          password,
          role: "user",
        });

        // Update UI
        toast.success("Successfully Registered!");
        navigate("/login");
      }
    } catch (error) {
      const errors = {};
      error.inner.forEach((error) => {
        errors[error.path] = error.message;
      });

      setErrors(errors);

      errors.email ? emailRef.current.focus() : passwordRef.current.focus();
    }
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

          <div className="absolute hidden lg:block left-40 top-1/3">/
            <p className="font-semibold text-3xl">Welcome to.</p>
            <p className="font-bold text-9xl text-secondary">KARATEKA</p>
            <p className="font-semibold text-3xl">Store...</p>
          </div>

          <div className="absolute top-1/3 left-16 xs:left-28 sm:left-52 lg:left-3/4">
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-sm">
                <label htmlFor="email" className="label">
                  <span className="label-text font-bold text-lg text-gray-600">
                    Email
                  </span>
                </label>
                <input
                  ref={emailRef}
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    const newErrors = { ...errors };
                    delete newErrors.email;
                    setErrors(newErrors);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
                {errors?.email && (
                  <span className="text-red-700">{errors.email}</span>
                )}
              </div>

              <div className="form-control w-full max-w-xs">
                <label htmlFor="password" className="label">
                  <span className="label-text font-bold text-lg text-gray-600">
                    Password
                  </span>
                </label>
                <input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    const newErrors = { ...errors };
                    delete newErrors.password;
                    setErrors(newErrors);
                  }}
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
                {errors?.password && (
                  <span className="text-red-700">{errors.password}</span>
                )}

                <input
                  className="btn btn-secondary btn-md mt-4"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
