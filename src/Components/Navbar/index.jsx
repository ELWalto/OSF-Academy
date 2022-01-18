import React from "react";

import { ShoppingCart } from "@material-ui/icons";
import { Nav, NavLink, Bars, NavBtn, NavBtnLink, NavMenu } from "./style";
import SearchBar from "../SearchBar";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src="https://i.ibb.co/nnQ1SFB/logo-wcommerce.png"
            height="inherit;"
            alt="w-commerce logo's"
          />
        </NavLink>
        {/* <NavMenu>
          <input type="text" placeholder="Busque seu produto" />
        </NavMenu> */}
        <SearchBar/>
        <Bars />
        <NavBtn>
          <NavBtnLink to="/cart">
            <ShoppingCart />
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
