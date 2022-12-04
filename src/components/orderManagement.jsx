/* eslint-disable jsx-a11y/anchor-is-valid */
import searchIcon from "../assets/searchIcon.svg";
import personIcon from "../assets/person.svg";

const OrderManagement = () => {
  return (
    <>
      <div>
        <h3 className="font-semibold text-[40px] mb-4 ml-1 tracking-[-2%] leading-[48px]">
          Orders management
        </h3>
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-[948px] py-4 overflow-hidden bg-white shadow-lg">
          <div className="flex justify-between ml-4">
            <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
            <div className="font-semibold text-xl leading-8 py-1">Orders</div>

            <form>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img src={searchIcon} alt="search icon" />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block focus:outline-none p-3 pl-10  font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                  placeholder="Search orders"
                  required
                />
              </div>
            </form>
            <div className="ml-10">
              <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 ">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 text-[#2A85FF] bg-[#EFEFEF] rounded-lg active"
                    aria-current="page"
                  >
                    Pending
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Active
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Cancel
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block py-2 mt-1 px-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    Completed
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inline-block w-[948px] shadow rounded-b-lg   bg-white  pt-3 ">
          <table className="w-[948px]">
            <thead>
              <tr>
                <th className="relative left-2 border-b-2 border-gray-100  leading-4 text-[#6F767E] text-sm">
                  Order Id
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Date
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Order Number
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Customer Name
                </th>
                <th className="px-6 py-2 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Phone Number
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Pickup Location
                </th>
                <th className=" border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E]">
                  Drop Off Location
                </th>
                <th className=" border-b-2 border-gray-100 text-sm leading-4   text-[#6F767E]">
                  Status
                </th>
                <th className="-translate-x-4 w-20   border-b-2 border-gray-100  text-sm leading-4 text-[#6F767E] ">
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
                    className="w-7 h-7 relative left-3"
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

export default OrderManagement;
