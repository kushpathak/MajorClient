import styled from "styled-components";
import SearchIcon from "../../images/search.png";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const NavbarContainer = styled.nav`
  background-color: black;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 789px) {
    justify-content: space-between;
  }
  @media (max-width: 535px) {
    justify-content: space-around;
  }
  /* justify-content: center; */
`;
export const Navlist = styled.ul`
  display: ${(props) => {
    return props.display ? "none" : "inline-block";
  }};
  list-style-type: none;
  @media (max-width: 789px) {
    display: ${(props) => {
      return props.display ? "inline-block" : "";
    }};
  }
`;
export const List = styled.li`
  display: inline-block;
  margin-right: 60px;
  /* margin-bottom: 2px; */

  color: white;
  font-size: 20px;
  margin-top: ${(props) => {
    return props.top ? "-5px" : "5px";
  }};
  margin-bottom: ${(props) => {
    return props.bottom ? "10px" : "0px";
  }};
  a {
    text-decoration: none;
    color: white;
  }
  .hamburger-img {
    width: 35px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1107px) {
    margin-right: 20px;
  }
  @media (max-width: 789px) {
    display: ${(props) => {
      return props.collapse ? "none" : "inline-block";
    }};
    margin-right: 35px;
    font-size: 18px;
  }
`;
export const Search = styled.input`
  z-index: 100;
  border: none;
  width: 270px;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 10px;
  height: 30px;
  background: url(${SearchIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: white;
  background-position: 95%;
  overflow: hidden;
  @media (max-width: 624px) {
    width: 210px;
  }
  @media (max-width: 565px) {
    width: 180px;
  }
  @media (max-width: 535px) {
    display: none;
  }
`;
export const Dropdown = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  /* height: 150px; */
  .line {
    border: none;
    width: 100%;
    background-color: white;
    margin: 0px;
    margin-bottom: 10px;
  }
`;
