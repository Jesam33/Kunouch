import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../Contexts/FormProvider";
import userIcon from "../assets/img/Ellipse 8.png";
import logoImg from "../assets/img/setting 1.png";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";

const Login = () => {
  const navigate = useNavigate();
  const {
    formData,
    SignUp,
    user,
    isLoading,
    setIsLoading,
    setUser,
    setSignUp,
    loginValidate,
    setFormData,
    logIn,
    Validate,
    errors,
    loginData,
    loginhandleChange,
    setLoginData,
    handleChange,
  } = useContext(FormContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("good working button");
    
    const loginErrors = loginValidate();
    if (Object.keys(loginErrors).length > 0 ){
      toast.error("Form has errors");
      console.log(loginErrors);
      return;
    }else {
      toast.success("Login success");
    }
    
    setIsLoading(true);
    try {
      await logIn(loginData.email, loginData.password); // Adjust to formData if needed
      toast.success("Login Success");
      navigate("/dashboard"); // Navigate only if login is successful
    } catch (error) {
      console.log("Failed to log in user:", error.message);
      toast.error("Login Failed");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="p-4 md:p-11 lg:px-16 xl:px-24 bg-[#eee3e3ab] min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row w-full lg:w-[100%] xl:w-[80%] 2xl:w-[80%] mx-auto">
        {/* Sidebar Section */}
        <div className="bg-blue-600 hidden lg:flex flex-col w-full lg:w-[45%] xl:w-[40%]  p-6 lg:p-8">
          <div className="mb-10">
            <div className="logoBox w-full flex items-center gap-1">
              <h1 className="logoText text-white text-2xl font-semibold">
                Dashboard <span className="text-[9px] text-white">v.01</span>
              </h1>
            </div>
          </div>
          <div className="text-white mb-12">
            <h1
              className="text-3xl xl:text-4xl font-bold"
              style={{ lineHeight: "45px" }}
            >
              Let’s set up your Operating Agreement
            </h1>
            <p className="mt-6 text-[14px] font-light">
              All-in-one solution to form your business in the state. <br />
              Form a new company from scratch or onboard your <br />
              existing US company.
            </p>
          </div>
          <div className="bg-blue-700 mt-auto text-white rounded-lg shadow-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-2">
              I barely had to do anything
            </h3>
            <p className="text-sm mb-4">
              Love the experience. Got my business set up and all necessary
              details in about a month, and I barely had to do anything.
              Definitely recommend!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src={userIcon}
                  alt="Adamson Johns"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">Adamson Johns</span>
              </div>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-[55%] xl:w-[65%] bg-white p-5 lg:p-10 xl:p-14">
          <h1 className="text-2xl xl:text-3xl mb-8">Welcome..</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  space-y-4 ">
              <div className="flex flex-col space-y-0 mt-4">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  onChange={loginhandleChange}
                  className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                  type="email"
                />
                <p className="errors text-red-500">{errors.email}</p>
              </div>
              <div className="flex flex-col space-y-0 mt-4">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  onChange={loginhandleChange}
                  className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                  type="password"
                />
                <p className="errors text-red-500">{errors.password}</p>
              </div>
              <button className="w-full font-semibold mt-4 rounded-[5px] bg-blue-500 text-white py-2 xl:py-3">
               {isLoading ? "Loading ..." : "login"}
              </button>
              <div className="mt-4">
              <p className="label" htmlFor="password">Don't have an account? <Link className="text-blue-700 underline" to="/">Sign Up</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
