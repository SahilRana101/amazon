import React from "react";
import { logo } from "../../assets/index";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-amazon_blue text-white h-16 px-4 py-1 flex items-center gap-4">
        <div className="headerHover">
          <img className="w-24 mt-3" src={logo} alt="logo" />
        </div>
        <div className="flex items-center headerHover">
          <div>
            <LocationOnOutlinedIcon />
          </div>
          <div>
            <p className="flex flex-col text-xs text-lightText font-light">
              Deliver to
              <span className="text-sm font-semibold -mt-1 text-whiteText">
                Oman
              </span>
            </p>
          </div>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative">
          <span className="w-14 h-full bg-gray-200 hover:bg-gray-300 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2 "
            type="text"
          />
          <span className=" w-12 h-full flex items-center justify-center bg-[#febd69] hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Accounts & Lists
            <span className="text-lightText">
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        <div className="flex items-center justify-center relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">Cart</p>
          <span className="absolute text-xs -top-1 left-6 px-[3px] bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
            0
          </span>
        </div>
      </div>
      <BottomHeader />
    </div>
  );
};

export default Header;
