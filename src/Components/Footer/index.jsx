import React from "react";
import { FooterStyle } from "./style";

const Footer = () => {
  return (
    <footer>
      <div>
        <FooterStyle>
          &copy; {new Date().getFullYear()}. All rights reserved
        </FooterStyle>
      </div>
    </footer>
  );
};

export default Footer;
