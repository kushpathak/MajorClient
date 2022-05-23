import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContainer } from "./styles/GlobalStyle";
import CircularProgress from "@mui/material/CircularProgress";
import Person from "../images/user.png";
import Heart from "../images/heart.jpeg";
import Comment from "../images/comment.png";
import Cover from "../images/cover.jpg";

import {
  BlogBox,
  BlogContainer,
  BlogContent,
  ErrorContainer,
  HomeContainer,
  List,
  ReactionContainer,
  ReactionList,
  Scrollable,
  SideItems,
  TagContainer,
} from "./styles/HomeStyle";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import Footer from "./Footer";
import SideBar from "./SideBar";
import UrlEnums from "../Helpers/UrlEnums";
function Home() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [commentV, setCommnetV] = useState("Comments");
  const [reactionV, setReactionV] = useState("Reactions");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const context = useContext(UserContext);
  var totalPages = 0;
  const limit = 5;
  const Ceil = (a, b) => {
    if (a % b === 0) return a / b;
    return Number.parseInt(a / b + 1);
  };
  const fetchAllBlogs = () => {
    axios
      .get(UrlEnums.GET_BLOGS, {
        params: {
          page: 1,
          limit,
        },
      })
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((e) => {
        setError(e.response);
      });
  };
  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      const ele = document.getElementById("blogs");
      if (ele) {
        ele.scroll();
      }
    });

    axios
      .get(UrlEnums.GET_LEN)
      .then((res) => {
        setTotal(Ceil(res.data.len, 5) + 1);
        fetchAllBlogs();
      })
      .catch((e) => {});
    return () => {
      document.addEventListener("keydown", function (event) {});
    };
  }, []);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 460) {
        setCommnetV("comments");
        setReactionV("reactions");
      } else {
        setCommnetV("");
        setReactionV("");
      }
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const fetchImage = (blog) => {
    if (blog.image){
    console.log(`${UrlEnums.AWS}/images/${blog.image}`);
      return (
        <img
          src={`${UrlEnums.AWS}/images/${blog.image}`}
          className="blog-img"
        />
      );
    }
    else return "";
  };
  const handleSave = (blogTitle) => {
    axios
      .post(
        UrlEnums.SAVE_BLOG,
        {
          userId: context.userId,
          blogTitle,
          jwt: context.jwt,
        },
        {
          params: {
            jwt: context.jwt,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        if (e.response.data === "Not Logged In") navigate("/login");
        console.log(e.response);
        // navigate("#");
      });
  };
  const convertToTags = (s) => {
    if (s === null || s === "") return "";
    var l = s.split(" ");
    const tags = l.map((item, idx) => {
      if (item != "") return <div className="tag">{`#${item}`}</div>;
    });
    return <TagContainer>{tags}</TagContainer>;
  };
  const fetchImg = (blog) => {
    const url = blog.user_details[0].image;
    if (!url || url === "null") {
      return Person;
    }
    return `${UrlEnums.AWS}/images/users/${url}`;
  };
  const loadBlogs = () => {
    const allBlogs = blogs.map((blog, idx) => {
      return (
        <BlogBox
          key={idx}
          id="all-blogs"
          onClick={async () => {
            try {
              const updateChoice = await axios.post(
                UrlEnums.UPDATE_PREFERENCES,
                {
                  user_id: context.userId,
                  tagString: blog.tags,
                },
                {
                  jwt: context.jwt,
                  withCredentials: true,
                }
              );
            } catch (e) {
              console.log(e.response);
            }
            try {
              const updateTrending = await axios.post(
                UrlEnums.UPDATE_TRENDING,
                {
                  title: blog.title,
                  user_id: context.userId,
                },
                { 
                  withCredentials: true 
                }
              );
            } catch (e) {
              console.log(e.response);
            }
            navigate(`/blog`, {
              state: {
                title: blog.title,
                image: fetchImg(blog),
              },
            });
          }}
        >
          {fetchImage(blog)}
          <BlogContent>
            <img src={fetchImg(blog)} className="person-icon" />
            <div className="blog-user">
              <p className="blog-userName">{blog.author}</p>
              <p className="blog-date">Nov 22 23:15</p>
            </div>

            <h2 className="blog-title">{blog.title}</h2>
            <h5 className="blog-tags">{convertToTags(blog.tags)}</h5>
            <ReactionContainer>
              <ReactionList>
                <List marginRight="-8px">
                  <img src={Heart} className="heart" />
                </List>
                <List marginRight="20px" className="text">
                  0 {reactionV}
                </List>
                <List marginRight="2px">
                  <img src={Comment} className="comment" />
                </List>
                <List marginRight="0px" className="text">
                  0 {commentV}
                </List>
              </ReactionList>
              <ReactionContainer>
                <List>
                  <button
                    className="btn-secondary save-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSave(blog.title);
                    }}
                  >
                    Save
                  </button>
                </List>
              </ReactionContainer>
            </ReactionContainer>
          </BlogContent>
        </BlogBox>
      );
    });
    return (
      <HomeContainer>
        <SideItems>
          <SideBar
            blogs={blogs}
            setBlogs={setBlogs}
            user_id={context.userId}
          ></SideBar>
        </SideItems>
        <div className="blog-container">{allBlogs}</div>
        <SideItems></SideItems>
      </HomeContainer>
    );
  };
  const loadHome = () => {
    if (blogs === null && error === null) {
      return (
        <ErrorContainer>
          <CircularProgress color="secondary" />
        </ErrorContainer>
      );
    } else {
      return (
        <>
          <Scrollable>
            <div className="img-container">
              <img src={Cover} className="cover" />
              <div className="img-content">
                <h5 className="img-content-header">
                  <Typewriter
                    options={{
                      strings: [
                        "Never Stop Writing!",
                        "Never Stop Exploring!",
                        "Welcome to The Blog Man",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h5>
                <button
                  className="btn-primary explore"
                  onClick={() => {
                    document.getElementById("all-blogs").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Explore --{`>`}
                </button>
              </div>
            </div>
            <BlogContainer id="blogs">
              {/* <Pagination count={totalPages + 1} color="primary" size="large" /> */}
              {loadBlogs()}
            </BlogContainer>
          </Scrollable>

          <Footer />
        </>
      );
    }
  };

  return <GlobalContainer height="90vh">{loadHome()}</GlobalContainer>;
}

export default Home;
