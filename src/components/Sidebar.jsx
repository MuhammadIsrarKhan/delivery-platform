/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import homeIcon from "../assets/homeIcon.svg";
import helpIcon from "../assets/helpIcon.svg";
import ordersIcon from "../assets/ordersIcon.svg";
import upArrowIcon from "../assets/uparrow.svg";
import downArrowIcon from "../assets/arrowdown.svg";
import rightArrowIcon from "../assets/rightarrow.svg";
// import { CiHome } from "react-icons/ci";
import Topbar from "./Topbar";
import Theme from "./Theme";

const Sidebar = () => {
  const [activeStatus, setActiveStatus] = useState("order management");
  const ordersHandler = () => {
    if (activeStatus === "order management") {
      setActiveStatus("");
    } else {
      setActiveStatus("order management");
    }
  };
  return (
    //sidebar
    <>
      <div className="flex flex-col bg-[#FCFCFC] w-1/4 h-screen">
        <img
          src={logo}
          alt="logo"
          className="object-cover w-14 h-14 ml-6 mt-6"
        />
        <aside class="w-80" aria-label="Sidebar">
          <div class="  py-4 overflow-y-auto rounded">
            <ul class="space-y-2 ml-5">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-[#EFEFEF]"
                >
                  <img
                    src={homeIcon}
                    alt="logo"
                    class="w-5 h-5 transition duration-75 "
                  />
                  <span class="ml-3 text-[#6F767E] font-semibold">Home</span>
                </a>
              </li>
              <li>
                <Link
                  to="/orderManagement"
                  href="#"
                  class="flex items-center p-2 m-0 text-base font-normal rounded-lg  hover:bg-[#EFEFEF]"
                  onClick={ordersHandler}
                >
                  <img
                    src={ordersIcon}
                    alt="logo"
                    class="w-5 h-5transition duration-75 "
                  />
                  <span class="ml-3 text-[#6F767E] font-semibold">
                    Orders Management
                  </span>
                  {activeStatus === "order management" ? (
                    <img
                      className="ml-16"
                      src={upArrowIcon}
                      alt="dropdown icon"
                    />
                  ) : (
                    <img
                      className="ml-16"
                      src={downArrowIcon}
                      alt="dropdown icon"
                    />
                  )}
                </Link>
                {activeStatus === "order management" ? (
                  <div>
                    <ul className="ml-4 h-44">
                      <li>
                        <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-6 "></span>{" "}
                        <Link
                          to="/neworder"
                          className="relative top-1 focus:font-semibold focus:bg-[#EFEFEF] focus:shadow p-3 pl-1  rounded-xl"
                        >
                          All Orders
                          <img
                            className="inline-block ml-36"
                            src={rightArrowIcon}
                            alt="rightarrow icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-6 "></span>{" "}
                        <button className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 pl-1 rounded-xl relative -top-5 focus:shadow">
                          Orders Tracking{" "}
                          <span class="ml-[90px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                            8
                          </span>
                        </button>
                      </li>
                      <li className="relative -top-14 ">
                        <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-20 "></span>{" "}
                        <button className=" focus:bg-[#EFEFEF] focus:font-semibold p-3 pl-1 rounded-xl focus:shadow">
                          Riders Tracking{" "}
                          <span class="ml-[94px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#B5E4CA] text-[#1A1D1F]  last:mr-0 mr-1">
                            8
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-[#EFEFEF]"
                >
                  <img
                    src={homeIcon}
                    alt="logo"
                    class="w-5 h-5 transition duration-75 "
                  />
                  <span class="ml-3 text-[#6F767E] font-semibold">
                    Dashboard
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <hr className="w-72 h-[2px] text-[#F4F4F4] absolute bottom-28 rounded-sm ml-6" />
          <img
            className="absolute bottom-20 w-6 h-6 ml-6"
            src={helpIcon}
            alt="help icon"
          />
          <p className="absolute bottom-20 ml-14 font-semibold text-base tracking-[-0.01em] text-[#6F767E]">
            Help & getting started
          </p>
          <span class="absolute bottom-20 ml-72 text-xs font-semibold inline-block py-1 px-2  rounded bg-[#CABDFF] text-[#1A1D1F]  last:mr-0 mr-1">
            8
          </span>
          <Theme />
        </aside>
      </div>
      <Topbar />
      <div className="fixed top-28 left-96 flex flex-row justify-center align-center">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
