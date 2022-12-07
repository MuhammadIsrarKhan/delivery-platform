import TextArea from "..//utilities/TextArea";
import leftArrowIcon from "../../assets/leftarrow.svg";
import subtractIcon from "../../assets/subtract.svg";
import newCustomerBtn from "../../assets/newCustomerBtn.svg";
import locationIcon from "../../assets/location.svg";
import newTag from "../../assets/newtag.svg";
import preview from "../../assets/preview.svg";
import myImage from "../../assets/my.jpg";
import doubleTick from "../../assets/doubleTick.svg";
import threeDots from "../../assets/threeDots.svg";
const Neworder = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="ml-10 laptop-3:ml-16">
          <h3 className="font-semibold text-[40px] mb-4 ml-1 tracking-[-2%] leading-[48px]">
            New Order
          </h3>
          <div className="flex flex-row">
            <div className=" w-[610px] laptop-3:w-[672px] rounded-lg p-6 gap-6 flex flex-col h-[860px]  bg-[#FCFCFC]">
              <div className="flex flex-row">
                <div className="w-4 h-8 rounded inline-block   bg-[#B5E4CA]"></div>
                <p className="w-60 font-semibold text-xl leading-8  ml-3">
                  {" "}
                  Name & description
                </p>
                <button className="ml-[254px] px-8 w-24 h-10 border-2 border-[#EFEFEF] bg-[#FCFCFC] rounded-lg flex flex-row justify-center">
                  <img
                    className="my-auto"
                    src={leftArrowIcon}
                    alt="leftArrowIcon"
                  />{" "}
                  <span className=" my-auto font-semibold ml-1">Back</span>
                </button>
              </div>

              <div className="flex flex-row">
                <p className=" not-italic font-semibold text-sm leading-6 text-gray-800">
                  Order title
                </p>
                <img className="ml-1" src={subtractIcon} alt="subtract icon" />
                <p className="box-border font-semibold leading-6 text-xs h-6 ml-3 pb-[2px] pl-[8px] pr-[8px] bg-[#272B30] text-[#F4F4F4] rounded">
                  Maximum 100 characters. No HTML or emoji allowed
                </p>
              </div>

              <input
                type="text"
                className="-translate-y-4 p-3 w-[560px] laptop-3:w-[630px] rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
              />

              <div className="flex flex-row mt-1 laptop-3:w-[630px]">
                <p className=" not-italic font-semibold text-sm leading-6 text-gray-800">
                  Description
                </p>
                <img className="ml-1" src={subtractIcon} alt="subtract icon" />
              </div>
              <TextArea />

              <div className="flex flex-row -translate-y-6">
                <p className=" not-italic font-semibold text-sm leading-6 text-gray-800 ">
                  Select Customer
                </p>
                <img className="ml-1" src={subtractIcon} alt="subtract icon" />
              </div>

              <div className="mt-0 font-semibold relative -top-10">
                <select className="form-select block w-full p-3   text-gray-700  bg-white border-[2px] border-solid border-gray-200 transition ease-in-out rounded-xl  focus:text-gray-700 focus:bg-white focus:border-[#2a85ff59] focus:outline-none">
                  <option>Jhon Doe</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <button className="w-40 relative -top-[52px]">
                <img src={newCustomerBtn} alt="add customer" />
              </button>

              <p className="text-[#6F767E] text-xs font-bold relative -top-12">
                Pickup Location
              </p>

              <div className="flex flex-row relative -top-16 w-[610px] laptop-3:w-[672px]">
                <img
                  className=" z-10 p-3  m-1 relative rounded-l-xl -top-[2px] bg-[#F4F4F4]"
                  src={locationIcon}
                  alt="location icon"
                />
                <input
                  type="text"
                  className=" relative -left-[50px]  px-12 w-full rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
                />
              </div>
              <p className="text-[#6F767E] text-xs font-bold relative -top-16">
                Drop off
              </p>

              <div className="flex flex-row relative -top-20 w-[610px] laptop-3:w-[672px]">
                <img
                  className=" z-10 p-3  m-1 relative rounded-l-xl -top-[2px] bg-[#F4F4F4]"
                  src={locationIcon}
                  alt="location icon"
                />
                <input
                  type="text"
                  className=" relative -left-[50px]  px-12 w-full rounded-xl focus:outline-none h-[48px] bg-[#FFFFFF] border-[2px] border-solid border-gray-200 focus:border-[#2a85ff59]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[310px] ml-2 h-[363px] rounded-lg p-6  bg-[rgb(252,252,252)]">
              <div className="flex flex-row">
                <img src={newTag} alt="tag " />
                <p className="w-60 font-semibold text-xl leading-8  ml-3">
                  {" "}
                  Preview
                </p>
                <img src={preview} alt="preview icon" />
              </div>
              <p className="w-60 font-semibold text-xl leading-8  ">
                {" "}
                Tower Burger
              </p>
              <p className="font-normal">Order description goes here...</p>
              <p className="text-[#1A1D1F] text-sm font-medium">Pickup</p>
              <p className="font-normal text-xs relative -top-2">
                1 Church Rd, Lough Common, Lusk, Co. Dublin, K45 WF90, Ireland
              </p>

              <p className="text-[#1A1D1F] text-sm font-medium ">Dropoff</p>
              <p className="font-normal text-xs relative -top-2">
                1 Church Rd, Lough Common, Lusk, Co. Dublin, K45 WF90, Ireland
              </p>

              <div className="flex flex-row ">
                <img
                  src={myImage}
                  alt="avatar"
                  className="rounded-full w-10 "
                />
                <p className="font-medium text-[15px] text-[#6F767E] relative top-2 ml-3">
                  by
                </p>
                <p className="font-semibold text-[15px] text-[#1A1D1F] relative top-2 ml-3">
                  Kundi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ alignItems: "center" }}
          className="w-[1014px] laptop-3:w-[1100px] h-[88px] bg-[#FCFCFC] mt-20 flex flex-row"
        >
          <img className="ml-5" src={doubleTick} alt="Double tick" />
          <p className="text-[#1A1D1F] text-sm font-medium ml-3">Last saved</p>
          <p className="text-[#1A1D1F] text-sm font-semibold ml-1">
            Oct 4,2021 - 23:22
          </p>
          <div className="ml-[440px] flex flex-row gap-2">
            {" "}
            <button className="px-[20px] py-3 border-2 border-[#EFEFEF] bg-[#FCFCFC] rounded-lg">
              <span className=" font-bold text-[15px]">Save Draft</span>
            </button>
            <button
              type="button"
              className=" px-[20px] py-3 rounded-xl bg-[#2A85FF] text-white hover:bg-blue-700 hover:shadow-lg   focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span className=" font-bold text-[15px]">Publish Now</span>
            </button>
            <button>
              <img src={threeDots} alt="threeDots" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Neworder;