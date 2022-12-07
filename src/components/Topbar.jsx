import searchIcon from "../assets/searchIcon.svg";
import messageIcon from "../assets/message.svg";
import bellIcon from "../assets/bell.svg";
import avatarImg from "../assets/my.jpg";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <nav className="fixed top-0 w-3/4 ml-[25%] flex flex-row  items-center py-3 z-50 bg-[#FCFCFC] h-20 lg:h-16">
      <div className="container-fluid w-full flex flex-wrap items-center px-6">
        <form>
          <div className="relative lg:w-10">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block focus:outline-none p-3 pl-10 lg:pl-10  font-bold text-xs w-80 lg:w-72  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
              placeholder="Search or type command"
              required
            />
            <span className="absolute top-1 right-2.5 lg:-right-60 lg:w-[80px]  bg-[#FFFFFF] text-base shadow text-[#1A1D1F] focus:outline-none font-semibold rounded-lg  px-5  py-1 lg:py-1">
              ⌘ F
            </span>
          </div>
        </form>

        <Link
          to="/neworder"
          type="button"
          className="  ml-64 lg:ml-[43%] w-36 h-12 lg:w-32 lg:h-12 lg:py-0.5 lg:px-1 rounded-xl bg-[#2A85FF] text-white font-medium text-base leading-normal text-center shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        >
          <span className="lg:text-[25px]">+</span> New order
        </Link>
        <button className="m-6 ml-12 laptop-3:ml-24 inline-flex relative w-fit">
          <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-1 -translate-y-1 border-2 border-slate-50 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-1.5 text-xs bg-[#FF6A55] rounded-full z-10"></div>
          <img src={messageIcon} alt="message icon" />
        </button>
        <button className="m-6 inline-flex relative w-fit">
          <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-1.5 -translate-y-[6px] border-2 border-slate-50 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 p-1.5 text-xs bg-[#FF6A55] rounded-full z-10"></div>
          <img src={bellIcon} alt="message icon" />
        </button>
        <img
          src={avatarImg}
          className="ml-[3%]  rounded-full w-12"
          alt="Avatar"
        />
      </div>
    </nav>
  );
};

export default Topbar;
