import React from "react";
import AsideBar from "../Components/AsideBar/AsideBar";
import Products from "../Components/Products/Products";

const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          margin: "30vh",
        }}
      >
        <AsideBar/>
        <Products />
      </div>
    </>
  );
};

export default Home;
