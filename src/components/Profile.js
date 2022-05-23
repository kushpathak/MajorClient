import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import {
  Image,
  NavigationContainer,
  ProfileBox,
  ProfileContainer,
} from "./styles/ProfileStyle";
import emptyUserImage from "../images/emptyUser.png";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import SavedPosts from "./SavedPosts";
import UrlEnums from "../Helpers/UrlEnums";
const Profile = () => {
  const [clean, setClean] = useState({});
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(emptyUserImage);
  const [viewProfile, setViewProfile] = useState(null);
  const [absImage, setAbsImage] = useState(null);
  const [editText, setEditText] = useState("Edit Image");
  const [toggle, setToggle] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  const fetchImg = () => {
    axios
      .get(UrlEnums.USER_PROFILE, {
        params: {
          userId: context.userId,
          jwt: context.jwt,
        },
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo(res.data[0]);
        if (res.data[0].image === "null") {
          setProfilePic(emptyUserImage);
        } else {
          setProfilePic(
            `${UrlEnums.AWS}/images/users/${res.data[0].image}`
          );
          context.setImage(res.data[0].image);
        }
        setViewProfile(1);
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    axios
      .get(UrlEnums.STATUS, {
        params: {
          jwt: context.jwt,
        },
        withCredentials: true,
      })
      .then((res) => {
        fetchImg();
      })
      .catch((e) => {
        if (e.response.data === "Not Logged In") {
          context.setUserId(null);
          navigate("/login");
        }
      });
    return () => {
      setClean({});
    };
  }, []);
  useEffect(() => {
    if (absImage === null) return;
    const formData = new FormData();
    const btn = document.getElementsByClassName("btn-edit")[0];
    setEditText("Uploading...");
    formData.append("userId", context.userId);
    formData.append("photo", absImage);

    axios
      .post(`${UrlEnums.AWS}/update-image`, formData, {
        params: {
          jwt: context.jwt,
        }
      },{
        withCredentials: true,
      })
      .then((res) => {
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-success");
        setEditText("Image Changed");
        setTimeout(() => {
          btn.classList.remove("btn-success");
          btn.classList.add("btn-danger");
          setEditText("Edit Image");
        }, 1500);
        context.setImage(res.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [profilePic]);
  const handleUpload = () => {
    const ele = document.getElementById("inpfile");
    ele.click();
  };
  const showProfile = () => {
    if (viewProfile) {
      return (
        <ProfileContainer>
          <ProfileBox>
            <Image
              onClick={() => {
                console.log(profilePic);
              }}
              src={profilePic}
            ></Image>
            <button
              className="btn-danger btn-edit"
              onClick={() => {
                handleUpload();
              }}
            >
              {editText}
            </button>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              id="inpfile"
              onChange={(e) => {
                var file = e.target.files[0];
                var url = URL.createObjectURL(e.target.files[0]);
                setAbsImage(file);
                setProfilePic(url);
              }}
            ></input>
            <NavigationContainer>
              <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                <Link
                  underline="hover"
                  className="link"
                  color="text.secondary"
                  onClick={() => {
                    setToggle(1 - toggle);
                  }}
                >
                  Edit Profile
                </Link>
                <Link
                  underline="hover"
                  className="link"
                  color="text.primary"
                  onClick={() => {
                    setToggle(1 - toggle);
                  }}
                >
                  Saved Posts
                </Link>
              </Breadcrumbs>
            </NavigationContainer>
            {toggle === 0 ? (
              <ProfileInfo userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
              <SavedPosts userId={context.userId} />
            )}
          </ProfileBox>
        </ProfileContainer>
      );
    } else {
      return <div>Not Logged In</div>;
    }
  };
  return showProfile();
};

export default Profile;
