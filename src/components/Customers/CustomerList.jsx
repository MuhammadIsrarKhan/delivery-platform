/* eslint-disable jsx-a11y/anchor-is-valid */
import searchIcon from "../../assets/searchIcon.svg";
import active from "../../assets/customerManagement/active.svg";
import filter from "../../assets/customerManagement/filter.svg";
import myImage from "../../assets/my.jpg";

import { useState } from "react";

const CustomerList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <div>
      <h3 className="font-semibold xl:text-[40px] lg:text-3xl mb-4 ml-1 tracking-[-2%] leading-[48px]">
        Customers List
      </h3>
      {/* header section above the table  */}
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block  lg:w-[72vw] py-4 overflow-hidden bg-white shadow-lg">
        <div className="flex xl:justify-start justify-between ml-4 ">
          <div className="flex flex-row gap-5">
            <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
            <div className="font-semibold text-xl leading-8 py-1">Orders</div>

            <form>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                  <img src={searchIcon} alt="search icon" />
                </div>
                <input
                  type="search"
                  className="block focus:outline-none p-3 pl-10  font-bold text-xs xl:w-80 lg:w-[24vw]  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                  placeholder="Search orders"
                  required
                />
              </div>
            </form>
          </div>
          <div className="xl:absolute xl:right-8 flex flex-row gap-2 items-center">
            <button className="flex flex-row items-center gap-2 py-2 mt-1 px-3 text-[#1A1D1F] bg-[#EFEFEF] rounded-lg active">
              <img src={active} alt="active dot" />
              Active
            </button>
            <button className="py-2 mt-1 px-3 text-[#1A1D1F] hover:bg-[#EFEFEF] rounded-lg">
              new
            </button>
            <button className="w-[38px] h-[38px]">
              <img src={filter} alt="filter icon" />
            </button>
          </div>
        </div>
      </div>

      {/* header section End  */}
      <div className="inline-block lg:w-[72vw] shadow rounded-b-lg   bg-white  pt-3 ">
        <table className="lg:w-[96%] ml-4 table-auto">
          <thead class={`border-b ${isChecked ? "border-none" : null}`}>
            <tr>
              <th className="w-[24px] h-[24px]">
                <input
                  type="checkbox"
                  className={`appearance-none  w-[22px] h-[22px] rounded-[6px] border-[2px] border-solid border-[rgba(111,118,126,0.4)] box-content outline-none cursor-pointer ${
                    isAllChecked
                      ? "bg-[#2A85FF] box-content border-[2px] border-solid border-[#2A85FF] -translate-y-[3px]"
                      : null
                  }`}
                  onChange={() => setIsAllChecked((prev) => !prev)}
                />
              </th>
              <th
                scope="col"
                class="text-sm font-semibold text-[#6F767E] px-6 py-4 text-left"
              >
                <span className="ml-5">Name</span>
              </th>
              <th
                scope="col"
                class="text-sm font-semibold text-[#6F767E] px-6 py-4 text-left"
              >
                Phone
              </th>
              <th
                scope="col"
                class="text-sm font-semibold text-[#6F767E] px-6 py-4 text-left"
              >
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class={`border-b${
                isChecked ? "border-none bg-[#EFEFEF] rounded-[8px]" : null
              }`}
            >
              <td className="w-[24px] rounded-l-lg">
                <input
                  type="checkbox"
                  className={`appearance-none  w-[22px] h-[22px] rounded-[6px] border-[2px] border-solid border-[rgba(111,118,126,0.4)] box-content outline-none cursor-pointer ${
                    isChecked
                      ? "bg-[#2A85FF] box-content border-[2px] border-solid border-[#2A85FF] -translate-y-[3px]"
                      : null
                  }`}
                  onChange={() => setIsChecked((prev) => !prev)}
                />
              </td>
              <td className="p-4 w-[276.09px]">
                <div className="flex flex-row text-xs ml-5 font-semibold leadi[#6F767E]t-blue-900">
                  <img
                    src={myImage}
                    alt="avatar"
                    className="rounded-full w-10 h-10"
                  />
                  <div className=" ml-3 flex flex-col">
                    <p className="font-bold text-base text-[#1A1D1F]">
                      Israr Khan
                    </p>
                    <p className="text-[#9A9FA5] font-semibold text-[13px]">
                      israr@gmail.com
                    </p>
                  </div>
                </div>
              </td>
              <td class="text-sm text-[#6F767E] font-semibold px-6 py-4 w-[276.09px]">
                +442344122
              </td>
              <td class="text-xs text-[#6F767E] leading-4 h-auto px-6 py-4 w-[276.09px] rounded-r-lg">
                1 Church Rd, Lough Common, Lusk, Co. Dublin, K45 WF90, Ireland
              </td>
            </tr>
          </tbody>
        </table>
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
          <div></div>
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">
              <div></div>
              <div></div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
