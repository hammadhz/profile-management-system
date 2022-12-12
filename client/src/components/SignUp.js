import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAt,
  faLock,
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { SERVER_URL } from "../constants/ServerUrl";

const SignUp = () => {
  const [signupUser, setSignupUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  const googleAuth = () => {
    window.open(`${SERVER_URL}/auth/google/callback`, "_self");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosInstance
      .post("/user/signup", signupUser)
      .then((res) => {
        setSuccessMsg(res.data);
        setErrorMsg("");
        navigate("/user/dashboard");
      })
      .catch((err) => {
        setSuccessMsg("");
        setErrorMsg(err.response.data);
        navigate("/");
      });

    setSignupUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-[20px]">
        <div className="border border-blue-700 rounded-lg py-3 px-7">
          <button onClick={googleAuth}>
            <FcGoogle className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
      <div
        className="
            flex flex-col
            bg-white
            shadow-md
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-8
            rounded-3xl
            w-50
            max-w-md
          "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <div className="relative">
                <div
                  className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                >
                  <FontAwesomeIcon icon={faUser} />
                </div>

                <input
                  type="text"
                  name="name"
                  value={signupUser.name}
                  onChange={handleChange}
                  className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                  placeholder="Enter your Full Name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <div className="relative">
                <div
                  className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                >
                  <FontAwesomeIcon icon={faAt} />
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={signupUser.email}
                  onChange={handleChange}
                  className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="relative">
                <div
                  className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                >
                  <span>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  value={signupUser.password}
                  onChange={handleChange}
                  className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-2xl
                      border border-gray-400
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                    "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                    flex
                    mt-2
                    items-center
                    justify-center
                    focus:outline-none
                    text-white text-sm
                    sm:text-base
                    bg-blue-500
                    hover:bg-blue-600
                    rounded-2xl
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in
                  "
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <span className="ml-2">
          You have an account?
          <Link to="/signin">
            <i className="text-sm ml-2 text-blue-500 font-semibold">
              Sign In here
            </i>
          </Link>
        </span>
      </div>
      {errorMsg && (
        <div
          className="bg-red-100 rounded-lg py-5 px-6 my-4 text-base text-red-700"
          role="alert"
        >
          <FontAwesomeIcon icon={faCircleXmark} /> {errorMsg}
        </div>
      )}
      {successMsg && (
        <div
          className="bg-green-100 rounded-lg py-5 px-6 my-4 text-base text-green-700"
          role="alert"
        >
          <FontAwesomeIcon icon={faCircleCheck} /> {successMsg}
        </div>
      )}
    </div>
  );
};

export default SignUp;
