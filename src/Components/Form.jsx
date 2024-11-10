import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../Contexts/FormProvider";
import logoImg from "../assets/img/setting 1.png";
import userIcon from "../assets/img/Ellipse 8.png";

const Form = () => {
  const navigate = useNavigate();
  const {
    setFirstName,
    setEmail,
    setPassword,
    email,
    firstName,
    lastName,
    confirmPassword,
    setConfirmPassword,
    setLastName,
    password,
    Validate,
    errors,
  } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validate();

    if (Object.keys(validationErrors).length > 0) {
      console.log("Validation errors:", validationErrors);
      return;
    } else {
      localStorage.setItem("firstName", firstName);
      console.log(firstName);
      alert("Form successfully created");
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-4 md:p-11 lg:px-16 xl:px-24 bg-[#eee3e3ab] min-h-screen flex items-center justify-center">
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
            <h1 className="text-3xl xl:text-4xl font-bold" style={{ lineHeight: "45px" }}>
              Let’s set up your Operating Agreement
            </h1>
            <p className="mt-6 text-[14px] font-light">
              All-in-one solution to form your business in the state. <br />
              Form a new company from scratch or onboard your <br />
              existing US company.
            </p>
          </div>
          <div className="bg-blue-700 mt-auto text-white rounded-lg shadow-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-2">I barely had to do anything</h3>
            <p className="text-sm mb-4">
              Love the experience. Got my business set up and all necessary details in about a month,
              and I barely had to do anything. Definitely recommend!
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src={userIcon} alt="Adamson Johns" className="w-8 h-8 rounded-full" />
                <span className="font-medium">Adamson Johns</span>
              </div>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-[55%] xl:w-[65%] bg-white p-5 lg:p-10 xl:p-14">
          <h1 className="text-2xl xl:text-3xl mb-8">Let's get started</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col w-full md:w-[50%]">
                <label htmlFor="firstName">First Name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                  type="text"
                />
                <p className="errors text-red-500">{errors.firstName}</p>
              </div>
              <div className="flex flex-col w-full md:w-[50%]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                  type="text"
                />
                <p className="errors text-red-500">{errors.lastName}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-0 mt-4">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                type="email"
              />
              <p className="errors text-red-500">{errors.email}</p>
            </div>
            <div className="flex flex-col space-y-0 mt-4">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                type="password"
              />
              <p className="errors text-red-500">{errors.password}</p>
            </div>
            <div className="flex flex-col space-y-0 mt-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="py-2 xl:py-3 bg-transparent outline-none px-3 rounded-[5px] border border-gray-400"
                type="password"
              />
              <p className="errors text-red-500">{errors.confirmPassword}</p>
            </div>
            <button className="w-full font-semibold mt-4 rounded-[5px] bg-blue-500 text-white py-2 xl:py-3">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
