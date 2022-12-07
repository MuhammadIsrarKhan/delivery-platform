/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import helpIcon from "../assets/helpIcon.svg";
// import { CiHome } from "react-icons/ci";
import Topbar from "./Topbar";
import Theme from "./utilities/Theme";
import OrderManagement from "./OrderManagement/OrderManagement";
import RidersManagement from "./RidersManagement/RidersManagement";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("");
  const dropDownHandler = (status) => {
    if (activeStatus === status) {
      setActiveStatus("");
    } else {
      setActiveStatus(status);
    }
  };
  return (
    //sidebar
    <div>
      <div className="flex flex-col bg-[#FCFCFC] w-1/4 h-screen fixed z-50">
        <img
          src={logo}
          alt="logo"
          className="object-cover w-14 lg:w-8 h-14 lg:h-8 ml-3 mt-6"
        />
        <aside className=" mt-5" aria-label="Sidebar">
          <div className="laptop-2:w-[342px] laptop-2:h-[410px] laptop-2:overflow-y-auto laptop-3:h-screen laptop-3:overflow-auto">
            <OrderManagement
              activeStatus={activeStatus}
              dropDown={dropDownHandler}
            />
            <RidersManagement
              activeStatus={activeStatus}
              dropDown={dropDownHandler}
            />
          </div>
          <hr className="w-72 lg:w-56 h-[2px] text-[#F4F4F4] absolute bottom-28 rounded-sm ml-6" />
          <img
            className="absolute bottom-20 w-6 h-6 lg:w-5 lg:h-5 ml-6"
            src={helpIcon}
            alt="help icon"
          />
          <p className="absolute bottom-20 ml-14 font-semibold text-sm tracking-[-0.01em] text-[#6F767E]">
            Help & getting started
          </p>
          <span className="absolute bottom-20 ml-72 lg:ml-56 text-xs font-semibold inline-block py-1 px-2  rounded bg-[#CABDFF] text-[#1A1D1F]  last:mr-0 mr-1">
            8
          </span>
          <Theme />
        </aside>
      </div>
      <Topbar />
      <div className="absolute top-28 left-[335px]  flex flex-row justify-center align-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
