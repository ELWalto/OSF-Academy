import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./style";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://i.ibb.co/nnQ1SFB/logo-wcommerce.png" height="inherit;"  
            alt="w-commerce logo's"
          />
        </NavLink>
        <NavMenu>
        <input type="text" placeholder="Busque seu produto" 
    height= '20px'    align-self= 'stretch' display ='space-between'/>
        </NavMenu>
        <Bars />
        <NavBtn>
          <NavBtnLink to="/cart"> Cart</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
