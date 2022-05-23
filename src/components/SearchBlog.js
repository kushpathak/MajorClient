import { CircularProgress, List } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Error404 from "./Error404";
import { ErrorContainer, TagContainer } from "./styles/HomeStyle";
import FetchBlogs from "./fetchBlogs";
import { SearchContainer } from "./styles/SearchBlogStyle";
import UrlEnums from "../Helpers/UrlEnums";
const SearchBlog = () => {
  const search = useLocation().state.search;
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setBlogs(null);
    setError(null);
    axios
      .get(UrlEnums.SEARCH_BLOG, {
        params: {
          search: search,
        },
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((e) => {
        setError("Some Error Occured");
      });
  }, [search]);

  const fetchBlogs = () => {};
  const searchBlogs = () => {
    if (blogs === null && error === null) {
      return (
        <ErrorContainer height="81vh">
          <CircularProgress color="secondary" />
        </ErrorContainer>
      );
    } else if (error) {
      return <Error404 />;
    } else {
      return (
        <SearchContainer>
          <h2 className="header">Showing Results for {search}</h2>
          {<FetchBlogs blogs={blogs} />}
        </SearchContainer>
      );
    }
  };
  return searchBlogs();
};

export default SearchBlog;
