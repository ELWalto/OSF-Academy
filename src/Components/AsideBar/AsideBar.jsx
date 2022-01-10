import React from "react";
import { Checkbox } from "@material-ui/core";
import { AsideBarStyle, AsideSectionStyle, LiStyle, UlStyle } from "./style";

const AsideBar = () => {
  return (
    <AsideBarStyle>
      <AsideSectionStyle>
        <UlStyle>Categorias
          <LiStyle ><Checkbox color='primary'/>
              item 
          </LiStyle>
          <LiStyle ><Checkbox color='primary'/>
              item 
          </LiStyle>
          <LiStyle ><Checkbox color='primary'/>
              item 
          </LiStyle>
          <LiStyle ><Checkbox color='primary'/>
              item 
          </LiStyle>
        </UlStyle>
        
      </AsideSectionStyle>
    </AsideBarStyle>
  );
};

export default AsideBar;
