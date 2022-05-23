import React, { useContext, useEffect, useState } from "react";
import {
  BtnContainer,
  FormContent,
  Header,
  Input,
  NewBlogContainer,
  NewBlogForm,
  PreviewBtn,
  PreviewContainer,
  SubmitBtn,
} from "./styles/AddBlogStyle";
import { GlobalContainer } from "./styles/GlobalStyle";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ErrorContainer } from "./styles/HomeStyle";
import { CircularProgress } from "@mui/material";
import UrlEnums from "../Helpers/UrlEnums";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
let marked = require("marked");
const AddBlog = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [image, setImage] = useState("No Image Selected");
  const [absImage, setAbsImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [tags, setTags] = useState(null);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("author", context.userId);
    formData.append("title", title);
    formData.append("tags", tags);
    formData.append("photo", absImage);
    formData.append("snippet", content);
    axios.post(`${UrlEnums.ML_API}/predict-hate-speech`, {
      content,
    }).then((res) => {
      if(res.data.message !== "Normal Blog"){
        setOpen(true);
      }
      else{
          axios
        .post(UrlEnums.ADD_BLOGS, formData, {
          params: {
            jwt: context.jwt,
          },
          withCredentials: true,
        })
        .then((res) => {
          navigate("/");
        })
        .catch((e) => {
          if (e.response && e.response.data === "Not Logged In") {
            context.setUserId(null);
            navigate("/login");
          }
          // console.log(e.response);
        });
      }
    }).catch((e) => console.log(e));
  };
  const handleUpload = () => {
    const upload = document.getElementById("inpfile");
    upload.click();
  };
  const auto_grow = (ele) => {
    const element = document.getElementById(ele);
    element.style.height = "0px";
    element.style.height = element.scrollHeight + "px";
  };
  const convertToTags = (s) => {
    if (s === null || s === "") return "";
    var l = s.split(" ");
    var newTag = "";
    for (var i = 0; i < l.length; i++) {
      newTag += "#" + l[i] + " ";
    }
    return newTag.slice(0, -1);
  };
  useEffect(() => {
    setToggle(-1);
    axios
      .get(UrlEnums.STATUS, {
        params: {
          jwt: context.jwt,
        },
        withCredentials: true,
      })
      .then((res) => {
        setToggle(0);
      })
      .catch((e) => {
        if (e.response.data === "Not Logged In") {
          context.setUserId(null);
          navigate("/login");
        }
      });
  }, []);
  useEffect(() => {
    if (toggle === 1) {
      const ele = document.getElementById("markdown-preview");
      if (content !== null && content !== undefined)
        ele.innerHTML = marked.parse(content);
    } else if (toggle === 0) {
      const ContentEle = document.getElementById("content");
      const TagEle = document.getElementById("tags");
      const TitleEle = document.getElementById("title");
      ContentEle.innerHTML = content;
      // ContentEle.style.maxHeight = "100px";
      TagEle.innerHTML = tags;
      TitleEle.innerHTML = title;
    }
  }, [toggle]);
  const handleClose = () => {
    setOpen(1-open);
  }

  const preview = () => {
    return (
      <GlobalContainer height="90vh">
        <NewBlogContainer>
          <PreviewContainer>
            <Header fontSize="30px" fontWeight="600">
              {title}
            </Header>
            <Header fontSize="20px" fontWeight="400">
              {convertToTags(tags)}
            </Header>
            <Header id="markdown-preview" fontSize="20px" overflow="true">
              {""}
            </Header>
            <BtnContainer>
              <PreviewBtn
                className="btn-danger btn-end"
                onClick={() => {
                  setToggle(0);
                }}
              >
                Close
              </PreviewBtn>
            </BtnContainer>
          </PreviewContainer>
        </NewBlogContainer>
        <Footer />
      </GlobalContainer>
    );
  };
  const addBlog = () => {
    return (
      <GlobalContainer height="90vh">
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">
            {"Warning!! Hate Speech"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              According to our analysis this content contains hateful speech which is not intended to go to the community,
              Please Try changing the content to proceed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <NewBlogContainer>
          <NewBlogForm>
            <FormContent>
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
                  const ele = document.getElementById("inpfile");
                  var path = ele.value;
                  setAbsImage(e.target.files[0]);
                  setImage(path);
                }}
              />
              <p className="text-danger fs-5">{image}</p>
              <Input
                placeholder="New Post Title Here ..."
                id="title"
                marginTop="20px"
                fontSize="40px"
                fontWeight="600"
                secondary="35px"
                small="25px"
                onInput={() => {
                  auto_grow("title");
                }}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Input
                id="tags"
                placeholder="Add Upto 4 tags"
                fontSize="20px"
                fontWeight="400"
                marginTop="-5px"
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />
              <Input
                id="content"
                placeholder="Write your blog content here. . ."
                height="200px"
                fontSize="20px"
                fontWeight="400"
                marginTop="5px"
                marginResp="-13px"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </FormContent>
            <BtnContainer>
              <SubmitBtn
                className="btn-primary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Publish
              </SubmitBtn>
              <SubmitBtn className="btn-primary">Draft</SubmitBtn>
              <SubmitBtn
                className="btn-success"
                onClick={() => {
                  setToggle(1);
                }}
              >
                Preview
              </SubmitBtn>
            </BtnContainer>
          </NewBlogForm>
        </NewBlogContainer>
        <Footer />
      </GlobalContainer>
    );
  };
  if (toggle === 0) {
    return addBlog();
  } else if (toggle === 1) {
    return preview();
  } else {
    return (
      <ErrorContainer>
        <CircularProgress color="secondary" />
      </ErrorContainer>
    );
  }
};

export default AddBlog;
