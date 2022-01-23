import React from "react";
import { Checkbox } from "@material-ui/core";
import { SideBarStyle, SideSectionStyle, LiStyle, UlStyle } from "./style";

const SideBar = () => {
  return (
    <SideBarStyle>
      <SideSectionStyle>
        <UlStyle>Categorias
          <LiStyle ><Checkbox color='primary'/>
              Aventura
          </LiStyle>
          <LiStyle ><Checkbox color='primary'/>
              Tiro 
          </LiStyle>
        </UlStyle>
        
      </SideSectionStyle>
    </SideBarStyle>
  );
};

export default SideBar;
