import { React, useState, useEffect } from "react";
import Navbar from "../components/molecules/Navbar";
import signupIcon from "../assets/vectors/signup.svg";
import ButtonPrimary from "../components/atoms/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import cookies from "js-cookie";

export default function Signup() {
  const [isValidUser, setIsValidUser] = useState(null);
  const [isNameEntered, setIsNameEntered] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const [isPhoneNoValid, setIsPhoneNoValid] = useState(null);
  const [isCompanyNameEntered, setIsCompanyNameValid] = useState(null);
  const [isSignupSuccess, setIsSignupSuccess] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get("auth")) {
      navigate("/dashboard");
    }
  }, []);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    password: "",
    typeofUser: "NOTADMIN",
  });

  const togglePasswordVisibility = () => {
    let x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const onChange = (e) => {
    setUserDetails((details) => ({
      ...details,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (userDetails.name.length) {
      setIsNameEntered(true);
    } else {
      setIsNameEntered(false);
      return;
    }

    if (userDetails.companyName.length) {
      setIsCompanyNameValid(true);
    } else {
      setIsCompanyNameValid(false);
      return;
    }

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)
    ) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
      return;
    }

    if (/^\d{10}$/.test(userDetails.phone)) {
      setIsPhoneNoValid(true);
    } else {
      setIsPhoneNoValid(false);
      return;
    }

    if (userDetails.password.length >= 8 && userDetails.password.length <= 15) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
      return;
    }

    // IMP: Add the Signup endpoint url here after backend is completed and also might have to remove the check for userAlreadyExists
    const signupUrl = `http://localhost:3000/users/register`;

    axios
      .post(signupUrl, userDetails)
      .then((response) => {
        if (response.data) {
          setIsSignupSuccess(true);
          alert("Yay! Account created successfully. Please login to continue");
          navigate("/login");
        } else {
          setIsSignupSuccess(false);
        }
        // if (response.data.userAlreadyExists) {
        //   setIsValidUser(false);
        // } else if (response.data.status) {
        //   setIsSignupSuccess(true);
        //   alert("Yay! Account created successfully. Please login to continue");
        //   navigate("/login");
        // } else {
        //   setIsSignupSuccess(false);
        // }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="w-screen h-[78vh] flex justify-evenly items-center md:m-20">
        <img
          src={signupIcon}
          alt="Login"
          width={"400px"}
          height={"400px"}
          className="hidden md:block"
        />

        <div className="min-w-[25vw] bg-background-secondary mx-7 rounded-xl shadow-2xl mt-32 md:mt-0">
          <div className="p-4 flex flex-col items-center justify-center">
            <h1 className="text-3xl m-3 mb-5 font-normal">
              Signup for <span className="text-orange-primary">ULIP</span>
            </h1>

            <form className="flex flex-col" onSubmit={onSubmit}>
              <div className="flex justify-center items-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={onChange}
                  className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                />
              </div>
              {isNameEntered === false && (
                <p className="text-red ml-1 mt-2">Please enter your name</p>
              )}

              <div className="flex justify-center items-center mt-4">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  onChange={onChange}
                  className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                />
              </div>
              {isCompanyNameEntered === false && (
                <p className="text-red ml-1 mt-2">
                  Please enter your company name
                </p>
              )}

              <div className="flex justify-center items-center mt-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                  onChange={onChange}
                />
              </div>
              {isEmailValid === false && (
                <p className="text-red ml-1 mt-2">Please enter a valid email</p>
              )}

              <div className="mt-4 flex justify-center items-center">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone No"
                  onChange={onChange}
                  className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white w-full xl:max-w-[23vw]"
                  pattern="\d{10}"
                />
              </div>
              {isPhoneNoValid === false && (
                <p className="text-red ml-1 mt-2">
                  Please enter a valid phone no.
                </p>
              )}

              <div className="my-4">
                <div className="flex justify-center items-center">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="p-3 rounded-lg outline-none text-xl bg-background-tertiary placeholder-white"
                    onChange={onChange}
                  />
                </div>
                {isPasswordValid === false && (
                  <p className="text-red ml-1 mt-2">
                    Password has to be between 8 and 15 characters
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

                {isSignupSuccess === false && (
                  <p className="text-red ml-1 mt-2">
                    Uh-oh! Unable to sign up. Please try again :(
                  </p>
                )}
              </div>

              <ButtonPrimary text="Sign Up" size="xl" />
            </form>
          </div>
          <p className="text-center text-lg mb-8">
            Already have an account?&nbsp;
            <Link to={"/login"}>
              <span className="text-orange-primary hover:text-white">
                Log In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
