import React from "react";
import Banner from "./components/banner/Banner";
import Products from "./components/home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="-mt-32 z-10">
        <Products />
      </div>
    </div>
  );
};

export default Home;
