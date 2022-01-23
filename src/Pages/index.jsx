import React from "react";
import SideBar from "../Components/SideBar/SideBar";
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
        {/* <SideBar /> */}
      </div>
    </>
  );
};

export default Home;
