import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../contexts/userContext";
import UrlEnums from "../Helpers/UrlEnums";

import { Info, UserInformation } from "./styles/ProfileInfoStyle";

const ProfileInfo = ({ userInfo, setUserInfo }) => {
  const context = useContext(UserContext);
  const [editStatus, setEditStatus] = useState("Edit Details");
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const setValue = (i) => {
    if (i === 0) {
      return userInfo.user_id;
    } else if (i === 1) {
      return userInfo.email;
    } else if (i === 2) {
      return userInfo.firstName;
    } else {
      return userInfo.lastName;
    }
  };
  const changeDisabled = (status) => {
    const ele = document.getElementsByClassName("value");
    for (var i = 0; i < 4; i++) {
      // console.log(status);
      ele[i].disabled = status;
      if (status === false) {
        ele[i].value = setValue(i);
      }
    }
  };
  const handleEdit = () => {
    console.log(editStatus);
    if (editStatus === "Edit Details") {
      changeDisabled(false);
      setEditStatus("Save");
    } else {
      setEditStatus("Saving...");
      const original_uid = userInfo.user_id;
      const UserId = !userName ? userInfo.user_id : userName;
      const emailId = email ? email : userInfo.email;
      const FirstName = firstName ? firstName : userInfo.firstName;
      const LastName = lastName ? lastName : userInfo.lastName;
      console.log(UserId);
      //   console.log(userInfo.userId);
      axios
        .post(
          UrlEnums.UPDATE_USER,
          {
            userId: UserId,
            email: emailId,
            firstName: FirstName,
            lastName: LastName,
            original: original_uid,
          },
          {
            jwt: context.jwt,
            withCredentials: true,
          }
        )
        .then((res) => {
          setEditStatus("Saved");
          context.setUserId(UserId);
          setTimeout(() => {
            changeDisabled(true);
            setEditStatus("Edit Details");
          }, 1500);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <UserInformation>
      <Info>
        <p className="property">User Id</p>
        <textarea
          className="value"
          disabled
          placeholder={userInfo.user_id}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></textarea>
      </Info>
      <Info>
        <p className="property">Email Id</p>
        <textarea
          className="value"
          disabled
          placeholder={userInfo.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></textarea>
      </Info>
      <Info>
        <p className="property">First Name</p>
        <textarea
          className="value"
          disabled
          placeholder={
            userInfo.firstName === "null" ? "Not Set" : userInfo.firstName
          }
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></textarea>
      </Info>
      <Info>
        <p className="property">Last Name</p>
        <textarea
          className="value"
          disabled
          placeholder={
            userInfo.lastName === "null" ? "Not Set" : userInfo.lastName
          }
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></textarea>
      </Info>
      <button
        className="btn-danger btn-edit"
        onClick={() => {
          handleEdit();
        }}
      >
        {editStatus}
      </button>
    </UserInformation>
  );
};

export default ProfileInfo;
