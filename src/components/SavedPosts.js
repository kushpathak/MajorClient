import React, { useContext } from "react";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorContainer } from "./styles/HomeStyle";
import { CircularProgress } from "@mui/material";
import FetchBlogs from "./fetchBlogs";
import { UserContext } from "../contexts/userContext";
import UrlEnums from "../Helpers/UrlEnums";
function SavedPosts({ userId }) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const context = useContext(UserContext);
  useEffect(async () => {
    try {
      const res = await axios.get(UrlEnums.GET_SAVED_POST, {
        params: {
          userId,
          jwt: context.jwt,
        },
        withCredentials: true,
      });
      var len = res.data.length;
      var Blogs = [];
      for (var i = 0; i < len; i++) {
        var newBlog = [];
        var newObj = {
          ...res.data[i]["blogs"][0],
          user_details: res.data[i]["user_details"],
        };
        Blogs.push(newObj);
      }

      setBlogs(Blogs);
    } catch (e) {
      navigate("/err");
    }
  }, []);
  const savedPostHelper = () => {
    if (blogs === null) {
      return (
        <ErrorContainer>
          <CircularProgress color="secondary" />
        </ErrorContainer>
      );
    } else {
      return <FetchBlogs blogs={blogs} change={1} />;
    }
  };
  return savedPostHelper();
}

export default SavedPosts;
