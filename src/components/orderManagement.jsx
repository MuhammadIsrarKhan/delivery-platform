import { HiOutlineUserCircle } from "react-icons/hi";
const OrderManagement = () => {
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-2 pr-10 lg:px-3">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
          <div className="py-1 text-2xl">Orders</div>
          <div className="inline-flex border rounded-xl w-6/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width="18"
                    height="18"
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-xl"
                placeholder="Search orders"
              />
            </div>
          </div>
          <div className="ml-10">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block py-3 px-4 text-[#2A85FF] bg-[#EFEFEF] rounded-lg active"
                  aria-current="page"
                >
                  Pending
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Active
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Cancel
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Completed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className=" border-b-2 border-gray-100  leading-4 text-[#6F767E] text-sm">
                Order Id
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Order Number
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-2 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Phone Number
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Pickup Location
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider">
                Drop Off Location
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-100 text-center text-sm leading-4 text-[#6F767E] tracking-wider">
                Status
              </th>
              <th className="  py-3 border-b-2 border-gray-100 text-left text-sm leading-4 text-[#6F767E] tracking-wider ">
                Assign to
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm leading-5 text-gray-800">#1</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100">
                <div className="text-sm leading-5 text-blue-900">
                  02 Nov,2022
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-sm leading-5">
                1
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-sm leading-5">
                john
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 text-blue-900 border-gray-100 text-sm leading-5 ">
                <div className="text-[#83BF6E] bg-[#EAFAE4] rounded">
                  01232193218
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100 text-blue-900 text-sm leading-5">
                Deans
              </td>
              <td className="px-6 py-4 whitespace-no-wrap  border-b-2 border-gray-100 text-sm leading-5">
                islamia college peshawar pakistan
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100 text-blue-900 text-sm leading-5">
                <div className="flex flex-nowrap gap-x-px">
                  <div className=" w-2 h-3  rounded-xl bg-red-500 mr-2 mt-1  "></div>
                  <div>unassigned</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b-2 border-gray-100 text-blue-900 text-xl leading-5">
                <HiOutlineUserCircle />
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

export default OrderManagement;
