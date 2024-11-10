import React from "react";
import profile2 from "../assets/img/profile-2user.png";
import profileTick from "../assets/img/profile-tick.png";
import elipse58 from "../assets/img/Ellipse 58.png";
import elipse59 from "../assets/img/Ellipse 59.png";
import elipse60 from "../assets/img/Ellipse 60.png";
import elipse61 from "../assets/img/Ellipse 61.png";
import elipse62 from "../assets/img/Ellipse 62.png";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import monitorImg from "../assets/img/monitor.png";
import Table from "./Table";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainContent = () => {
  return (
    <div className="flex">
      <div className="lg:w-[25%] xl:w-[20%]">
        <Sidebar />
      </div>
      <div className="my-4 px-[10px]  md:px-[40px] lg:px-[50px] w-[100%] lg:w-[80%] ">
        <Header />
        <div className=" md:flex w- justify-around gap-[10px] items-center  bg-white rounded-[30px] p-3 px-1 md:px-0  lg:px-0">
          <div className="flex items-center  gap-7 md:gap-2 lg:gap-4   sm p-3  ">
            <div className="img rounded-[100px]  p-5  bg-slate-500">
              <img src={profile2} alt="" className="w-5 md:w-8 lg:w-10" />
            </div>
            <div className="img-text ">
              <p className="text-[#ACACAC] logoText text-[10px] md:text-[10px] lg:text-[14px] font-400]">
                Total Customers
              </p>
              <h1 className="font-[700] logoText text-3xl">5,423</h1>
              <span className="flex items-center gap-1 ">
                <FaArrowUp className="w-4 h-4 text-[#00AC4F]" />{" "}
                <span className="logoText text-[10px] md:text-[10px] lg:text-[14px] text-[#00AC4F]  font-[500]">
                  {" "}
                  16%
                </span>
                <span className="logoText text-[10px] md:text-[9px] lg:text-[14px] font-[500]">
                  {" "}
                  this month
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center  gap-7 md:gap-2 lg:gap-4 md:br lg:br p-3 pr-[10px] md:pr-[10px] lg:pr-[50px] ">
            <div className="img rounded-[100px]  p-5  bg-slate-500">
              <img src={profile2} alt="" className="w-5 md:w-8 lg:w-10" />
            </div>
            <div className="img-text ">
              <p className="text-[#ACACAC] logoText text-[10px] md:text-[10px] lg:text-[14px] font-400]">
                Members
              </p>
              <h1 className="font-[700] logoText text-2xl">1,893</h1>
              <span className="flex items-center gap-1 ">
                <FaArrowUp className="w-4 h-4 text-[#D0004B]" />{" "}
                <span className="logoText text-[10px] md:text-[10px] lg:text-[14px] text-[#D0004B]  font-[500]">
                  {" "}
                  1%
                </span>
                <span className="logoText text-[10px] md:text-[9px] lg:text-[14px] font-[500]">
                  {" "}
                  this month
                </span>
              </span>
            </div>
          </div>

          <div className="flex items-center   gap-7  md:gap-2 lg:gap-4 md:br lg:br p-3">
            <div className="img rounded-[100px]  p-5  bg-slate-500">
              <img src={profile2} alt="" className="w-5 md:w-8 lg:w-10" />
            </div>
            <div className="img-text ">
              <p className="text-[#ACACAC] logoText text-[10px] md:text-[10px] lg:text-[14px] font-400]">
                Active Now
              </p>
              <h1 className="font-[700] logoText text-2xl">189</h1>
              <div className="flex ">
                <img className="" src={elipse58} alt="" />
                <img className="" src={elipse59} alt="" />
                <img className="" src={elipse60} alt="" />
                <img className="" src={elipse61} alt="" />
                {/* <img className="" src={elipse62} alt="" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <Table />
      </div>
    </div>
  );
};

export default MainContent;
