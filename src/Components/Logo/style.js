import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: #0379f9;
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
  align-content: space-around;
  height: 100px;
  
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  &.active {
    color: #15cdfc;
    cursor: pointer;
  }
`;

export const DivCounter = styled.div`
  color: #fff;
  justify-content: center;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010686;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  background-color: #0379f9;
  padding-bottom: 1em;
  

  /* margin-left: 1rem; */
  input {
    margin-top: 0%;
    align-self: center;
    justify-content: center;
    text-align: center;
    display: flex;
    height: 2.5rem;
    width: 15rem;
    border-radius: 0.5em;
    border: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-self: center;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  display: flex;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010686;
  }

  
`;
