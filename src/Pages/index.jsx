import React from "react";
import AsideBar from "../Components/AsideBar/AsideBar";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar />

        {/* <AsideBar/> */}
      </div>
    </>
  );
};

export default Home;
