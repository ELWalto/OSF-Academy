import React from "react";
import { Nav, NavLink, Bars, NavBtn, NavBtnLink } from "./style";

const Logo = () => {
  return (
    
      <Nav>
        <NavLink to="/">
          <img
            src="https://i.ibb.co/nnQ1SFB/logo-wcommerce.png"
            height="inherit;"
            alt="w-commerce logo's"
          />
        </NavLink>
        <Bars />
      </Nav>
    
  );
};

export default Logo;
