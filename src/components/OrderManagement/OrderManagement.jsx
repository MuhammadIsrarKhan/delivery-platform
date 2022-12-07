/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import ordersIcon from "../../assets/ordersIcon.svg";
import upArrowIcon from "../../assets/uparrow.svg";
import downArrowIcon from "../../assets/arrowdown.svg";
import rightArrowIcon from "../../assets/rightarrow.svg";
import homeIcon from "../../assets/homeIcon.svg";
const OrderManagement = ({ activeStatus, dropDown }) => {
  return (
    <ul className="space-y-2 ml-5 lg:ml-3">
      <li>
        <a
          href="#"
          className="flex items-center p-2 lg:w-60 text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF]"
        >
          <img
            src={homeIcon}
            alt="logo"
            className="w-5 lg:w-4 h-5 lg:h-4 transition duration-75 "
          />
          <span className="ml-3 text-[#6F767E] font-semibold">Home</span>
        </a>
      </li>
      <li>
        <Link
          to="/AllOrders"
          href="#"
          className="flex items-center p-2 m-0 lg:relative lg:-top-2   lg:w-60 text-base lg:text-sm rounded-lg  hover:bg-[#EFEFEF]"
          onClick={() => dropDown("order management")}
        >
          <img
            src={ordersIcon}
            alt="logo"
            className="w-5 lg:w-4 h-5 lg:h-4 transition duration-75 "
          />
          <span className="ml-3 text-[#6F767E] font-semibold">
            Orders Management
          </span>
          {activeStatus === "order management" ? (
            <img
              className="ml-16 lg:ml-10 "
              src={upArrowIcon}
              alt="dropdown icon"
            />
          ) : (
            <img
              className="ml-16 lg:ml-10"
              src={downArrowIcon}
              alt="dropdown icon"
            />
          )}
        </Link>
        {activeStatus === "order management" ? (
          <div>
            <ul className="ml-4 lg:h-44">
              <li>
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-6 "></span>{" "}
                <Link
                  to="/neworder"
                  className="relative top-1 focus:font-semibold text-sm focus:bg-[#EFEFEF] focus:shadow p-3 pl-1  rounded-xl"
                >
                  All Orders
                  <img
                    className="inline-block ml-36 lg:ml-[95px]"
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
                  Orders Tracking{" "}
                  <span className="ml-[90px] lg:ml-[53px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#FFBC99] text-[#1A1D1F]  last:mr-0 mr-1">
                    8
                  </span>
                </Link>
              </li>
              <li className="relative -top-14 ">
                <span className="border-[#EFEFEF] border-2 border-t-0 border-r-0 rounded-bl-md w-4 inline-block h-20 "></span>{" "}
                <Link
                  to="/ridersTracking"
                  className=" focus:bg-[#EFEFEF] focus:font-semibold p-3 pl-1 rounded-xl focus:shadow text-sm"
                >
                  Riders Tracking{" "}
                  <span className="ml-[94px] lg:ml-[53px] text-xs font-semibold inline-block py-1 px-2  rounded bg-[#B5E4CA] text-[#1A1D1F]  last:mr-0 mr-1">
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

export default OrderManagement;
