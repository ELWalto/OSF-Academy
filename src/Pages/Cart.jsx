import React from "react";
import CartIcon from "../Components/CartIcon";
import Logo from "../Components/Logo/logo";

export const Cart = () => {
  return (
    <>
      <div style={{justifyContent:"space-evenly"}}>
        <Logo />
      </div>
        
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1> Cart </h1>
      </div>
    </>
  );
};
