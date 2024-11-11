// src/components/Header.js
import React, {useContext} from "react";
import { CiSearch } from "react-icons/ci";
import Input from "./Input";
import { FormContext } from "../Contexts/FormProvider";
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  const { firstName, formData, saveFirstName,  setSearchInput, searchInput, setOpenSidebar, openSidebar, handleOpenSidebar } = useContext(FormContext);
  const userName = localStorage.getItem("firstName");
  
  return (
    <header className="header">
      <div className="div md:flex lg:flex justify-between  items-center m-5 mx-[30px]">
        <div className="greetins flex justify-between items-center">
          <h1 className="text-1xl md:text-2xl font-[600] logoText">
            Hello, {userName}👋
          </h1>
          <button className="md:hidden lg:hidden" onClick={handleOpenSidebar}><RiMenu2Fill/></button>
        </div>
        <div className="search flex items-center space-x-11 mt-4 md:mt-0 lg:mt-0">
          <div className="search w-full bg-red-400">
            <div className="flex border items-center gap-1 px-2 bg-white">
              <CiSearch className="w-5 h-5 text-[#AAAAAA]" />{" "}
              {/* Adjust the size and color */}
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Table"
                className="border-0 font-[200] text-[12px] bg-transparent outline-0 h-[36px] w-[180px] px-2 py-3"
              />
            </div>
          </div>
          <button className="hidden md:flex lg:hidden" onClick={handleOpenSidebar}><RiMenu2Fill/></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
