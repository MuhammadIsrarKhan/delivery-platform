/* eslint-disable jsx-a11y/anchor-is-valid */
import searchIcon from "../../assets/searchIcon.svg";
import assignLabel from "../../assets/assignLabel.svg";
import trackOrder from "../../assets/trackOrder.svg";
import { Link } from "react-router-dom";

const OrderTracking = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold xl:text-[40px] lg:text-3xl mb-4 ml-1 tracking-[-2%] leading-[48px]">
          Orders Tracking
        </h3>
        {/* status  */}
        <div className="align-middle mb-2 rounded-lg inline-block  lg:w-[72vw] py-4 overflow-hidden bg-white shadow-lg">
          <div className="flex xl:justify-start justify-between ml-4 ">
            <div>
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-2 border-b-[3px] border-solid border-[#2A85FF] text-[#2A85FF] active"
                  >
                    Pending
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100"

                  >
                    Active
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                  >
                    Cancel
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            <div className="xl:absolute xl:right-0">
              <Link
                to="/neworder"
                type="button"
                className="lg:right-10 lg:absolute lg:w-32 lg:h-10 rounded-xl bg-[#2A85FF] text-white font-medium text-base leading-normal text-center shadow-md hover:bg-blue-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="lg:text-[25px]">+</span> New order
              </Link>
            </div>
          </div>
        </div>

        {/* header section End  */}
        <div className="inline-block lg:w-[72vw] shadow rounded-b-lg   bg-white  pt-3 ">
          <table className="lg:w-[95%] ml-4">
            <thead>
              <tr className="border-b">
                <th className="relative left-2 border-gray-100  leading-4 text-[#6F767E] text-sm">
                  Order Id
                </th>
                <th className="px-6 py-3  border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Date
                </th>
                <th className="lg:px-0 lg:py-0  border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Order Number
                </th>
                <th className="px-6 py-3  border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Customer Name
                </th>
                <th className="px-6 py-2  border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Phone Number
                </th>
                <th className="px-6 py-3  border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Pickup Location
                </th>
                <th className="  xl:pl-[1vw] border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Drop Off Location
                </th>
                <th className="-translate-x-4  border-gray-100 text-sm leading-4   text-[#6F767E]">
                  Status
                </th>
                <th className="-translate-x-4 w-20    border-gray-100  text-sm leading-4 text-[#6F767E] ">
                  Assign To
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="w-[948px] border-b">
                <td className="px-6 py-4   border-gray-100">
                  <div className="flex items-center">
                    <div className="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </td>
                <td className=" py-4   border-gray-100">
                  <div className="text-xs font-medium leading-5 text-blue-900">
                    02 Nov,2022
                  </div>
                </td>
                <td className="px-6 py-4   text-blue-900 border-gray-100 text-sm leading-5">
                  1
                </td>
                <td className="px-6 py-4   text-blue-900 border-gray-100 text-sm leading-5">
                  john
                </td>
                <td className=" py-4   text-blue-900 border-gray-100 text-xs leading-5 ">
                  <div className="text-[#83BF6E] w-[92px] text-center bg-[#EAFAE4] rounded">
                    +01232193218
                  </div>
                </td>
                <td className="px-6 py-4   border-gray-100 text-blue-900 text-xs font-medium leading-5">
                  Deans
                </td>
                <td className="px-6 text-xs font-medium py-4    border-gray-100 leading-5 text-gray-800">
                  islamia college peshawar pakistan
                </td>
                <td className="   border-gray-100 ">
                  <img src={assignLabel} alt="assign label" />
                </td>
                <td className=" border-gray-100">
                  <img
                    className="w-7 h-7 relative left-3"
                    src={trackOrder}
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

export default OrderTracking;
