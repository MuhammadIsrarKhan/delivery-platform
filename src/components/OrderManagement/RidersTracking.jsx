import searchIcon from "../../assets/searchIcon.svg";
import map from "../../assets/RidersTracking/map.png";
const RidersTracking = () => {
  return (
    <div className="ml-10 laptop-3:ml-14">
      <h3 className="font-semibold text-[40px] mb-4 ml-1 tracking-[-2%] leading-[48px] flex flex-col">
        Riders tracking
      </h3>
      <div className="rounded-lg w-[948px] laptop-3:w-[1020px] h-[440px] laptop-3:h-[777px] py-4 bg-white shadow-lg">
        <div className="flex flex-row gap-3 ml-4">
          <div className="w-5 h-10 rounded  bg-[#CABDFF]"></div>
          <div className="font-semibold text-xl leading-8 py-1">Riders</div>

          <form>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={searchIcon} alt="search icon" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block focus:outline-none p-3 pl-10  font-bold text-xs w-80  rounded-lg bg-[#F4F4F4] caret-[#2A85FF]"
                placeholder="Search rider"
                required
              />
            </div>
          </form>
        </div>

        <div className="w-[860px] laptop-3:w-[950px] rounded-xl border-[2px] border-solid border-gray-200  h-[330px] box-border m-10 -translate-y-3">
          <img
            className=" rounded-xl h-[330px] laptop-3:h-[650px]  w-[860px] laptop-3:w-[950px]"
            style={{ objectFit: "cover" }}
            src={map}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default RidersTracking;
