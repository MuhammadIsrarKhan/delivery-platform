import { useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
// import sunIcon from "../assets/sun.svg";

const Theme = () => {
  const [themeStatus, setThemeStatus] = useState("light");
  const sunBtnHandler = () => {
    setThemeStatus("light");
  };
  const moonBtnHandler = () => {
    setThemeStatus("dark");
  };
  // const html = document.querySelector("html");
  // if (themeStatus === "dark") {
  //   html.classList.add("dark");
  // } else {
  //   html.classList.remove("dark");
  // }
  return (
    <div className="w-72 box-border h-10 bg-[#F4F4F4] rounded-[40px] absolute bottom-7 ml-6 text-center flex flex-row">
      <button
        className={`w-1/2 box-border ${
          themeStatus === "light"
            ? "bg-[#FCFCFC] m-[4px] rounded-[32px] shadow"
            : ""
        }`}
        onClick={sunBtnHandler}
      >
        {themeStatus === "light" ? (
          <BsSunFill className="inline" />
        ) : (
          <BsSun className="inline" />
        )}{" "}
        Light
      </button>
      <button
        className={`w-1/2 dark:bg-black ${
          themeStatus === "dark"
            ? "bg-[#FCFCFC] m-[4px] rounded-[32px] shadow "
            : ""
        }`}
        onClick={moonBtnHandler}
      >
        {themeStatus === "dark" ? (
          <BsMoonFill className="inline -mt-1" />
        ) : (
          <BsMoon className="inline -mt-1" />
        )}{" "}
        Dark
      </button>
    </div>
  );
};

export default Theme;
