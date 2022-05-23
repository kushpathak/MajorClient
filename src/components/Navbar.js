import React, { useContext } from "react";
import {
  Container,
  Dropdown,
  List,
  NavbarContainer,
  Navlist,
  Search,
} from "./styles/NavStyle";
import Button from "@mui/material/Button";
import Hamburger from "../images/hamburger.png";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UrlEnums from "../Helpers/UrlEnums";
// import { UserContext } from "../contexts/userContext";
const Navbar = () => {
  const [size, setSize] = useState(0);
  const [loggedInText, setLoggedInText] = useState("Sign In");
  const [signout, setSignOut] = useState("Sign up");
  const [reload, setReload] = useState(null);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(() => {
    const userId = context.userId;
    // console.log(typeof userId);
    // console.log(userId === null || userId === "null");
    if (userId !== "null" && userId !== null) {
      setLoggedInText("Profile");
      setSignOut("Log Out");
    } else {
      setLoggedInText("Sign In");
      setSignOut("Sign Up");
    }
  }, [context]);
  useEffect(() => {
    const ele = document.getElementById("dropdown");
    ele.style.maxHeight = "0px";
  }, []);
  useEffect(() => {
    function handleDrop() {
      const ele = document.getElementById("dropdown");
      if (window.innerWidth > 799) {
        ele.style.maxHeight = "0px";
      }
    }
    window.addEventListener("resize", handleDrop);
    return () => {
      window.removeEventListener("resize", handleDrop);
    };
  }, [size]);
  const handleSignOut = () => {
    if (signout === "Log Out") {
      axios
        .post(
          UrlEnums.LOGOUT,
          {
            jwt: context.jwt,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          context.setUserId(null);
          context.setJwt(null);
          localStorage.setItem("userId", null);
          localStorage.setItem("image", null);
          localStorage.setItem("jwt", null);
          setReload(1);
          navigate("/");
        })
        .catch((e) => {
          // console.log(e.response);
        });
    }
  };
  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.maxHeight === "0px") {
      dropdown.style.maxHeight = "160px";
    } else {
      dropdown.style.maxHeight = "0px";
    }
  };
  return (
    <Container>
      <NavbarContainer>
        <Navlist>
          <List>
            <Link to="/">The Blog Man</Link>
          </List>
          <List collapse={true}>
            <Link to="/add-blog">New Blog</Link>
          </List>
          <List>
            <Search
              placeholder="Search Blogs"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.charCode === 13 && search) {
                  navigate("search", {
                    state: {
                      search,
                    },
                  });
                }
              }}
            />
          </List>
          <List style={{ "margin-left": "-20px", "margin-top": "10px" }}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("search-image");
              }}
            >
              <i className="fa fa-camera" style={{ "font-size": "20px" }}></i>
            </Button>
          </List>
        </Navlist>
        <Navlist>
          <List collapse={true}>
            <Link to={loggedInText === "Profile" ? "/profile" : "/login"}>
              {loggedInText}
            </Link>
          </List>
          <List collapse={true}>
            <Link
              to={signout === "Log Out" ? "#" : "/signup"}
              onClick={() => {
                handleSignOut();
              }}
            >
              {signout}
            </Link>
          </List>
        </Navlist>
        <Navlist display="none">
          <List>
            <img
              src={Hamburger}
              className="hamburger-img"
              onClick={() => {
                handleDropdown();
              }}
            />
          </List>
        </Navlist>
      </NavbarContainer>
      <Dropdown id="dropdown">
        <hr className="line" />
        <List top={true}>New Blog</List>
        <List>
          <Link
            to={signout === "Log Out" ? "#" : "/signup"}
            onClick={() => {
              handleSignOut();
            }}
          >
            {signout}
          </Link>
        </List>
        <List bottom={"10px"}>
          <Link to={loggedInText === "Profile" ? "/profile" : "/login"}>
            {loggedInText}
          </Link>
        </List>
      </Dropdown>
      <Outlet />
      {/* <Footer /> */}
    </Container>
  );
};

export default Navbar;
