import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Properties() {
  return (
    <div className="max-w-[1440px] mx-auto py-5 px-4 flex items-center w-full pt-38 propertyParent">
      <div className="bgimg">
        <div className="mt-[92px] ml-[8px] lg:ml-[50px]">
          <div>
            <h1 className="font-bold text-[30px] sm:text-[35px] xl:text-[56px] max-w-[490px]">
              Easy way to find a perfect property
            </h1>
            <p className="text-[#585981] max-w-[470px] font-medium text-[22px] pt-[39px] ">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
          </div>
          <ul className="flex gap-[55px] pt-[62px] items-center">
            <li className="text-[#110229] font-bold bg-white w-[102px] h-[39px] text-center pt-2 rounded-t-lg">
              RENT
            </li>
            <li className="text-[#8F90A6]">BUY</li>
            <li className="text-[#8F90A6]">SELL</li>
          </ul>
          <div className="w-full h-full pb-5 shadow-[0px_30px_60px_-15px_#8F90BC26] backdrop-blur-[20px] bg-[rgba(255,255,255,0.8)] rounded-lg lg:w-[948px]">
            <div className="flex pl-5 pt-5 gap-10 flex-wrap">
              <div className="flex flex-col text-start">
                <h4 className="text-[15px] lg:text-[20px] font-normal">
                  Location
                </h4>
                <p className="text-[#8F90A6] text-[15px] lg:text-[20px] font-normal flex items-center gap-2">
                  Select Your City
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="cursor-pointer"
                  />
                </p>
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-[15px] lg:text-[20px] font-normal">
                  Property Type
                </h4>
                <p className="text-[#8F90A6] text-[15px] lg:text-[20px] font-normal flex items-center gap-2">
                  Choose Property Type
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="cursor-pointer"
                  />
                </p>
              </div>
              <div className="flex flex-col text-start">
                <h4 className="text-[15px] lg:text-[20px] font-normal">
                  Price Range
                </h4>
                <p className="text-[#8F90A6] text-[15px] lg:text-[20px] font-normal flex items-center gap-2">
                  Choose Price Range
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="cursor-pointer"
                  />
                </p>
              </div>
              <div className="glassBtn flex items-center ml-auto mr-3 bg-[#1DAEFF] rounded-lg h-[62px] w-[62px] justify-center cursor-pointer">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
