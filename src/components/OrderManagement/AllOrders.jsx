/* eslint-disable jsx-a11y/anchor-is-valid */
import searchIcon from "../../assets/searchIcon.svg";
import personIcon from "../../assets/person.svg";
import { Link } from "react-router-dom";

const AllOrders = () => {
  return (
    <>
      <div className="ml-10 lg:-ml-2 laptop-3:ml-14">
        <h3 className="font-semibold text-[40px] lg:text-3xl mb-4 ml-1 tracking-[-2%] leading-[48px]">
          Orders management
        </h3>
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-[948px] lg:w-[95%] laptop-3:w-[990px]     py-4 overflow-hidden bg-white shadow-lg">
          <div className="flex flex-row gap-3 ml-4">
            <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
            <div className="font-semibold text-xl leading-8 py-1">Orders</div>
            <form>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img src={searchIcon} alt="search icon" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block focus:outline-none p-3 pl-10  font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                  placeholder="Search orders"
                  required
                />
              </div>
            </form>
            <Link
              to="/neworder"
              type="button"
              className="  ml-64 lg:ml-[23%] w-36 h-12 lg:w-32 lg:h-10 rounded-xl bg-[#2A85FF] text-white font-medium text-base leading-normal text-center shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              <span className="lg:text-[25px]">+</span> New order
            </Link>
          </div>
        </div>
        <div className="inline-block w-[948px] lg:w-[95%] laptop-3:w-[990px] shadow rounded-b-lg   bg-white  pt-3 ">
          <table className="w-[948px] lg:w-[95%]">
            <thead>
              <tr>
                <th className="relative left-2 lg:left-1 border-b-2 border-gray-100   text-[#6F767E] lg:text-xs text-sm">
                  Order Id
                </th>
                <th className="px-6 py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Date
                </th>
                <th className="px-6 py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Order Number
                </th>
                <th className="px-6 py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Customer Name
                </th>
                <th className="px-6 py-2 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Phone Number
                </th>
                <th className="px-6 py-3 lg:px-1 lg:py-1 border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Pickup Location
                </th>
                <th className=" border-b-2 border-gray-100 text-left text-sm  text-[#6F767E] lg:text-xs">
                  Drop Off Location
                </th>
                <th className=" border-b-2 border-gray-100 text-sm    text-[#6F767E] lg:text-xs">
                  Status
                </th>
                <th className="-translate-x-4 w-20 lg:w-0   border-b-2 border-gray-100  text-sm  text-[#6F767E] lg:text-xs">
                  Assign To
                </th>
              </tr>
            </thead>
            <tbody className="bg-whiteS">
              <tr className="w-[948px]">
                <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td className=" py-4 whitespace-no-wrap border-b-2 border-gray-100">
                  <div className="text-xs font-medium leading-5 text-blue-900">
                    02 Nov,2022
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-sm leading-5">
                  1
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-sm leading-5">
                  john
                </td>
                <td className=" py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-xs leading-5 ">
                  <div className="text-[#83BF6E] w-[92px] text-center bg-[#EAFAE4] rounded">
                    +01232193218
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100 text-blue-900 text-xs font-medium leading-5">
                  Deans
                </td>
                <td className="px-6 text-xs font-medium py-4 whitespace-no-wrap  border-b-2 border-gray-100 leading-5">
                  islamia college peshawar pakistan
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100 text-blue-900 text-xs leading-5">
                  <div className="flex flex-nowrap gap-x-px">
                    <div className=" w-2 h-3  rounded-xl bg-red-500 mr-2 mt-1  "></div>
                    <div>unassigned</div>
                  </div>
                </td>
                <td>
                  <img
                    className="w-7 h-7 relative left-3 lg:left-0"
                    src={personIcon}
                    alt="personIcon"
                  />
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
    </>
  );
};

export default AllOrders;
