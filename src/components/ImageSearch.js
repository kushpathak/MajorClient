import React, { useEffect, useState } from "react";
import "./styles/ImageSearchStyle.css";
import ImageUploader from "react-images-upload";
import Button from "@mui/material/Button";
import axios from "axios";
import UrlEnums from "../Helpers/UrlEnums";
import FetchBlogs from "./fetchBlogs";
import { ErrorContainer } from "./styles/HomeStyle";
import { CircularProgress } from "@mui/material";

const ImageSearch = () => {
  const [picture, setPicture] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!picture) {
        setPreview(undefined)
        return
    }
    setError(false);
    setBlogs(null);
    console.log("here");
    const objectUrl = URL.createObjectURL(picture)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
}, [picture]);

  const handleUpload = () => {
    const upload = document.getElementById("inpfile");
    upload.click();
  };
  const handleSubmit = () => {
    if(picture === null) {
      setError(true);
      return;
    }
    setError(false);
    const formData = new FormData();
    formData.append("photo", picture);
    setLoading(1);
    setBlogs(null);
    axios
      .post(`${UrlEnums.SEARCH_IMAGE}`, formData)
      .then((res) => {
        setBlogs(res.data);
        setLoading(0);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="image-search">
      <button
        className="cover-image"
        onClick={(e) => {
          e.preventDefault();
          handleUpload();
        }}
      >
        Add a cover Image
      </button>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        id="inpfile"
        onChange={(e) => {
          setPicture(e.target.files[0]);
        }}
      />
      {picture && <p>{picture.name}</p>}
      <Button
        className="submit-btn"
        variant="contained"
        color="success"
        onClick={() => handleSubmit()}
      >
        Search Image
      </Button>
      <br />
      <br />
      {error && <h4 style={{marginTop: "30px", color: "red"}}>Please choose an image</h4>}
      {picture && <h4 style = {{marginTop: "20px"}}>Showing results for</h4>}
      {picture &&  <img style = {{width: "50%", marginTop: "50px"}} src={preview} /> }
      {loading && <ErrorContainer>
          <CircularProgress color="secondary" />
        </ErrorContainer>}
      <div className="blog-container">
        {blogs && <FetchBlogs blogs={blogs} change={1} />}
      </div>
    </div>
  );
};

export default ImageSearch;
