import React from "react";

import { ShoppingCart } from "@material-ui/icons";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./style";

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
        <NavMenu>
          <input type="text" placeholder="Busque seu produto" />
        </NavMenu>
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
