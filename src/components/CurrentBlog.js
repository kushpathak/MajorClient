import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _get from 'lodash-es/get'
import {
  AllComments,
  Blog,
  BlogContainer,
  Comment,
  CommentBox,
  CommentContainer,
  Comments,
  DisplayContainer,
} from "./styles/CurrentBlogStyle";
import {
  BlogContent,
  ErrorContainer,
  Scrollable,
  TagContainer,
} from "./styles/HomeStyle";
import { UserContext } from "../contexts/userContext";
import Person from "../images/person.png";
import ReactHtmlParser from "react-html-parser";

import { useNavigate } from "react-router-dom";
import Heart from "../images/heart.jpeg";
import UrlEnums from "../Helpers/UrlEnums";

let marked = require("marked");

function CurrentBlog(props) {
  const params = useLocation();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState(null);
  const [allComments, setAllComments] = useState(null);
  const [toggle, setToggle] = useState({});
  const [reload, setReload] = useState(0);

  const context = useContext(UserContext);
  const navigate = useNavigate();
  const fetchImage = (img) => {
    if (img === null) return Person;
    return img;
  };
  useEffect(() => {
    axios
      .get(UrlEnums.GET_CURRENT_BLOG, {
        params: {
          title: params.state.title,
        },
      })
      .then((res) => {
        setBlog(res.data[0]);
      })
      .catch((e) => {
        setError(e.response);
      });
    axios
      .get(UrlEnums.GET_COMMENTS, {
        params: {
          blogTitle: params.state.title,
          jwt: context.jwt,
        },
      })
      .then((res) => {
        setAllComments(res.data);
      })
      .catch((e) => {});
  }, [reload]);
  const updateLikes = (comment) => {
    axios
      .post(
        UrlEnums.ADD_LIKE,
        {
          user_id: context.userId,
          comment: comment.comment,
        },
        {
          params: {
            jwt: context.jwt,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setReload(1 - reload);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getContent = (content) => {
    return ReactHtmlParser(marked.parse(content));
  };
  const convertToTags = (s) => {
    if (s === null || s === "") return "";
    var l = s.split(" ");
    const tags = l.map((item, idx) => {
      if (item != "") return <div className="tag">{`#${item}`}</div>;
    });
    return <TagContainer>{tags}</TagContainer>;
  };
  const fetchComments = () => {
    if (!allComments) return "";
    const val = allComments.map((singleComment, idx) => {
      return (
        <Comments>
          <h5 className="comment-author">{singleComment.userId}</h5>
          <p className="comment-content">{singleComment.comment}</p>
          <img
            src={
              singleComment.users[0].image === null
                ? Person
                : `${UrlEnums.AWS}/images/users/${singleComment.users[0].image}`
            }
            className="comment-userImg"
          />
          <div className="reactions">
            <img
              src={Heart}
              className="heart"
              id={singleComment._id}
              onClick={() => {
                updateLikes(singleComment);
              }}
            />
            <p className="heart-count" id={`${singleComment.id}hearts`}>
              {singleComment.likes.length} Reactions
            </p>
          </div>
        </Comments>
      );
    });
    return <AllComments>{val}</AllComments>;
  };
  const AddComment = () => {
    axios
      .post(
        UrlEnums.ADD_COMMENT,
        {
          blogTitle: params.state.title,
          userId: context.userId,
          comment,
        },
        {
          params: {
            jwt: context.jwt,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        setComment(null);
        var e = document.getElementById("comment");
        e.value = "";
        setReload(1);
      })
      .catch((e) => {
        if (e.response.data === "Not Logged In") {
          context.setUserId(null);
          localStorage.setItem("userId", null);
          localStorage.setItem("image", null);
          localStorage.setItem("jwt", null);
          navigate("/login");
        }

        // console.log(e.response);
      });
  };
  const fetchBlogs = () => {
    if (blog === null && error === null) {
      return (
        <ErrorContainer height="81vh">
          <CircularProgress color="secondary" />
        </ErrorContainer>
      );
    } else if (blog !== null) {
      return (
        <DisplayContainer>
          <BlogContainer>
            <Blog>
              <img
                src={`${UrlEnums.AWS}/images/${blog.image}`}
                className="blog-img"
              />
              <BlogContent marginTop="10px">
                <img
                  src={fetchImage(params.state ? params.state.image : null)}
                  className="person-icon"
                />
                <div className="blog-user">
                  <p className="blog-userName">{blog.author}</p>
                  <p className="blog-date">Posted on Nov 22</p>
                  <h2 className="blog-title">{blog.title}</h2>
                </div>
                <h5 className="blog-tags">{convertToTags(blog.tags)}</h5>
                <p id="main-content">{getContent(blog.snippet)}</p>
              </BlogContent>
            </Blog>
          </BlogContainer>
          <CommentContainer>
            <h4 className="comment-headers">Discussions</h4>
            <Comment>
              <img
                src={
                  context.image === null || context.image === "null"
                    ? fetchImage(null)
                    : `${UrlEnums.AWS}/images/users/${context.image}`
                }
                className="user-img"
              />
              <CommentBox
                id="comment"
                placeholder="Add to the discussion"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></CommentBox>
            </Comment>
            <button
              className="btn-primary submit-btn"
              onClick={() => {
                AddComment();
              }}
            >
              Submit
            </button>
            {fetchComments()}
          </CommentContainer>
        </DisplayContainer>
      );
    }
  };
  return fetchBlogs();
}

export default CurrentBlog;
