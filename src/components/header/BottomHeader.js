import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const BottomHeader = () => {
  return (
    <div className="w-full px-4 h-[36px] font-titleFont text-sm bg-amazon_light text-white flex items-center gap-2">
      <p className=" font-bold flex items-center gap-1 headerHover ">
        <span>
          <MenuIcon />
        </span>
        All
      </p>
      <p className="headerHover">Today's Deals</p>
      <p className="headerHover">Customer Service</p>
      <p className="headerHover">Gift Cards</p>
      <p className="headerHover">Registry</p>
      <p className="headerHover">Sell</p>
    </div>
  );
};

export default BottomHeader;
