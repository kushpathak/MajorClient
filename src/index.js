import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import UserContextProvider from "./contexts/userContext";
import CurrentBlog from "./components/CurrentBlog";
import Profile from "./components/Profile";
import SearchBlog from "./components/SearchBlog";
import Error404 from "./components/Error404";
import ImageSearch from "./components/ImageSearch";

ReactDOM.render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="blog/" element={<CurrentBlog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<SearchBlog />} />
          <Route path="search-image" element={<ImageSearch />} />
          <Route path="err" element={<Error404 />} />
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>,
  document.getElementById("root")
);
