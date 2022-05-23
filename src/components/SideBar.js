import axios from "axios";
import React from "react";
import { Topics } from "./styles/SideBarStyle";
import { useNavigate } from "react-router-dom";
import UrlEnums from "../Helpers/UrlEnums";
function SideBar({ blogs, setBlogs, user_id }) {
  const navigate = useNavigate();
  return (
    <Topics>
      <ul className="topic-list">
        <li className="topic">&#128466; Blogs written by you</li>
        <li className="topic">&#128175; Hot Picks of the day</li>
        <li
          className="topic"
          onClick={async () => {
            try {
              const trendingBlogs = await axios.get(
                UrlEnums.GET_TRENDING
              );
              setBlogs(trendingBlogs.data);
            } catch (e) {
              console.log(e.response);
            }
          }}
        >
          &#128293; Trending topics
        </li>
        <li
          className="topic"
          onClick={async () => {
            try {
              const blogs = await axios.get(
                "http://localhost:9000/get-suggestions",
                {
                  params: {
                    user_id,
                  },
                  withCredentials: true,
                }
              );
              setBlogs(blogs.data);
            } catch (e) {
              console.log(e.response);
            }
          }}
        >
          &#129300; Suggestions for you
        </li>
        <li
          className="topic"
          onClick={() => {
            navigate("/add-blog");
          }}
        >
          &#9997; Write a new Blog
        </li>
      </ul>
    </Topics>
  );
}

export default SideBar;
