/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import mainIcon from "../../assets/RiderManagementIcons/main.svg";
import addIcon from "../../assets/RiderManagementIcons/addIcon.svg";

import upArrowIcon from "../../assets/uparrow.svg";
import downArrowIcon from "../../assets/arrowdown.svg";
import rightArrowIcon from "../../assets/rightarrow.svg";
const RidersManagement = ({ activeStatus, dropDown }) => {
  return (
    <ul className="space-y-2 ml-5 lg:ml-3">
      <li>
        <Link
          to="/AllRiders"
          href="#"
          className="flex items-center p-2 m-0 text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF]"
          onClick={() => dropDown("riders management")}
        >
          <img
            src={mainIcon}
            alt="logo"
            className="w-5 lg:w-4 h-5 lg:h-4 transition duration-75 "
          />
          <span className="ml-3 text-[#6F767E] font-semibold">
            Riders Management
          </span>
          <img
            className="ml-6 lg:ml-3 lg:w-5 lg:h-5"
            src={addIcon}
            alt="addIcon"
          />
          {activeStatus === "riders management" ? (
            <button>
              {" "}
              <img
                className="ml-5 lg:ml-3"
                src={upArrowIcon}
                alt="dropdown icon"
              />
            </button>
          ) : (
            <img
              className="ml-5 lg:ml-3"
              src={downArrowIcon}
              alt="dropdown icon"
            />
          )}
        </Link>
        {activeStatus === "riders management" ? (
          <div>
            <ul className="ml-4 h-44">
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-6 "></span>{" "}
                <Link
                  to="/AllRiders"
                  className="relative top-1 focus:font-semibold focus:bg-[#EFEFEF] focus:shadow p-3 pl-1  rounded-xl text-sm"
                >
                  All Riders
                  <img
                    className="inline-block ml-36 lg:ml-[100px]"
                    src={rightArrowIcon}
                    alt="rightarrow icon"
                  />
                </Link>
              </li>
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-6 "></span>{" "}
                <Link
                  to="/orderTracking"
                  className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 pl-1 rounded-xl relative -top-5 focus:shadow text-sm"
                >
                  Users{" "}
                  <span className="ml-[165px] lg:ml-[120px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                    8
                  </span>
                </Link>
              </li>
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-10 "></span>{" "}
                <Link
                  to="/teams"
                  className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 pl-1 rounded-xl relative -top-9 focus:shadow text-sm"
                >
                  Teams{" "}
                  <span className="ml-[159px] lg:ml-[112px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                    8
                  </span>
                </Link>
              </li>
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-[51px] "></span>{" "}
                <Link
                  to="/orderTracking"
                  className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 pl-1 rounded-xl relative -top-12 focus:shadow text-sm"
                >
                  Geofences{" "}
                  <span className="ml-[128px] lg:ml-[84px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                    8
                  </span>
                </Link>
              </li>
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-16 relative -top-[64px] "></span>{" "}
                <Link
                  to="/orderTracking"
                  className=" focus:bg-[#EFEFEF] z-10 focus:font-semibold p-3 pl-1 rounded-xl relative -top-[60px] focus:shadow text-sm"
                >
                  Compensation{" "}
                  <span className="ml-[100px] lg:ml-[58px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                    8
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </li>
    </ul>
  );
};

export default RidersManagement;
