import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Main = () => {
  return (
    <React.Fragment>
      <div className="h-[55px] w-full bg-sixth py-[16px]">
        <div className="container">
          <nav className="flex justify-center gap-8 mb-[40px]">
            <Link
              to="/"
              className="font-bold font-open text-slate-700 rounded-lg hover:text-slate-900"
            >
              Sign up
            </Link>
            <Link
              to="/signin"
              className="font-bold font-open text-slate-700 rounded-lg hover:text-slate-900"
            >
              Sign in
            </Link>
          </nav>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Fragment>
  );
};

export default Main;
