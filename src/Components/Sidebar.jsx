import React, { useContext } from "react";
import logoImg from "../assets/img/setting 1.png";
import userIcon from "../assets/img/Ellipse 8.png";
import { FormContext } from "../Contexts/FormProvider";

// icons
import { TbSquareKey } from "react-icons/tb";
import {
  FaSquareOdnoklassniki,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa6";
import { LuUserSquare2 } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";


const Sidebar = () => {
  const { openSidebar, setOpenSidebar, handleOpenSidebar } = useContext(FormContext);

  return (
    <div
      className={`p-6 bg-blue-600 h-screen fixed top-0 left-0 z-50 transform transition-transform duration-300 w-[80%] md:w-[40%] lg:w-[25%] xl:w-[20%] ${
        openSidebar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:flex flex-col justify-center items-center`}
    >

      <div className="w-full lg:hidden flex justify-end">
        <div onClick={handleOpenSidebar} className="p-1 rounded-lg shadow bg-blue-700">

      <IoCloseOutline className="w-7 h-7 text-white"/>
        </div>
      </div>
      <div className="mb-6 w-full flex items-center justify-center lg:justify-start">
        <h1 className="logoText hidden text-white lg:flex text-4xl font-[500]">
          Dashboard <span className="text-[9px] text-white">v.01</span>
        </h1>
      </div>

      {/* Sidebar Links */}
      <div className="flex mt-8 items-center w-full">
        <ul className="sidebarLinks w-full">
          <SidebarLink Icon={TbSquareKey} label="Home" />
          <SidebarLink Icon={FaSquareOdnoklassniki} label="Products" />
          <SidebarLink Icon={LuUserSquare2} label="Customers" />
          <SidebarLink Icon={IoWalletOutline} label="Income" />
          <SidebarLink Icon={CiDiscount1} label="Promote" />
          <SidebarLink Icon={FiMessageSquare} label="Help" />
        </ul>
      </div>

      {/* Upgrade Box */}
      <div className="mt-auto bg-blue-700 text-white rounded-lg shadow-lg p-6 w-full hidden lg:flex flex-col items-center lg:flex-row justify-between">
        <div className="flex items-center gap-3">
          <img src={userIcon} alt="User icon" className="w-[40px] h-[40px]" />
          <div className="hidden lg:block">
            <h2 className="monts text-white font-[600]">Evano</h2>
            <p
              className="text-white monts text-[14px] logoText"
              style={{ lineHeight: "14px" }}
            >
              Project Manager
            </p>
          </div>
        </div>
        <FaChevronDown className="ml-4 hidden lg:flex" />
      </div>
    </div>
  );
};

// Sidebar Link Component
const SidebarLink = ({ Icon, label }) => (
  <li className="flex items-center justify-between mt-2 gap-4 p-3 px-5 rounded-[10px] hover:bg-white text-white hover:text-blue-600 transition duration-500 ease-in-out">
    <div className="flex items-center gap-4">
      <Icon className="w-[20px] h-[20px]" />
      <p className="monts font-[500]  lg:flex text-[13px] lg:text-[18px]">{label}</p>
    </div>
    <FaChevronRight className=" lg:flex w-[10px] h-[10px]" />
  </li>
);

export default Sidebar;
