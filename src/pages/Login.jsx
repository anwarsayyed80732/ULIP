import { React, useState } from "react";
import Navbar from "../components/molecules/Navbar";
import loginIcon from "../assets/vectors/login.svg";
import ButtonPrimary from "../components/atoms/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordEntered, setIsPasswordEntered] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const togglePasswordVisibility = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const onChange = (e) => {
    setCredentials((cred) => ({ ...cred, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)
    ) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
      return;
    }

    if (credentials.password.length) {
      setIsPasswordEntered(true);
    } else {
      setIsPasswordEntered(false);
      return;
    }

    // Add the login endpoint URL here after the backend is completed and ensure that user is navigated to the proper screen
    const loginUrl = "";
    axios
      .post(loginUrl, credentials)
      .then((response) => {
        console.log(response.data);

        if (response.data.token) {
          setIsLoggedIn(true);
          cookies.set("auth", response.data.token, { path: "/" });
          navigate("/dashboard");
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to login at the moment :(");
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-[78vh] flex justify-evenly items-center m-20">
        <img
          src={loginIcon}
          alt="Login"
          width={"400px"}
          height={"400px"}
          className="hidden md:block"
        />
        <div className="min-w-[25vw] bg-background-secondary mx-7 rounded-xl shadow-2xl">
          <div className="p-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl m-3 mb-5 font-normal">
              Login to <span className="text-orange-primary">ULIP</span>
            </h1>

            <form className="flex flex-col" onSubmit={onSubmit}>
              <div className="flex justify-between items-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                  onChange={onChange}
                />
              </div>
              {!isEmailValid && (
                <p className="text-red ml-1 mt-2">Please enter a valid email</p>
              )}

              <div className="my-4">
                <div className="flex justify-between items-center">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                    onChange={onChange}
                  />
                </div>
                {!isPasswordEntered && (
                  <p className="text-red ml-1 mt-2">
                    Please enter your password
                  </p>
                )}

                <div className="pt-2">
                  <input
                    type="checkbox"
                    name="toggle-visibility"
                    id="toggle-visibility"
                    className="cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                  <label
                    htmlFor="toggle-visibility"
                    className="pl-2 cursor-pointer"
                  >
                    Show Password
                  </label>
                </div>

                {isLoggedIn === false && (
                  <p className="text-red ml-1 mt-2">Invalid email/password</p>
                )}
              </div>

              <ButtonPrimary text="Log In" size="xl" />
            </form>
          </div>
          <p className="text-center text-lg mb-8">
            Don't have an account?&nbsp;
            <Link to={"/signup"}>
              <span className="text-orange-primary hover:text-white">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
