import React from "react";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <footer>
      <FooterStyle>
        &copy; {new Date().getFullYear()}. All rights reserved
      </FooterStyle>
    </footer>
  );
};

export default Footer;
