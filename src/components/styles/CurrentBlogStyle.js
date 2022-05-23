import styled from "styled-components";
export const DisplayContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 90vh; */
  scrollbar-width: none;

  background-color: #f0f0f0; ;
`;
export const Blog = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: white;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  .blog-img {
    width: 100%;
  }
  .blog-userName {
    font-size: 17px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: black;
  }
  .blog-date {
    color: grey;
    font-size: 15px;
  }
  .blog-title {
    margin-left: -50px;
    font-family: "Poppins", sans-serif;
  }
  .blog-tags {
    margin-left: -50px;
    margin-top: 20px;
    @media (max-width: 475px) {
      margin-left: 0px;
    }
  }
  .person-icon {
    border-radius: 50%;
    width: 50px;
  }
  #main-content {
    font-family: "Open-Sans", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 3px;
    @media (max-width: 650px) {
      font-size: 17px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      margin-right: 1px;
      margin-left: 2px;
      text-align: justify;
    }
  }
  @media (max-width: 1600px) {
    width: 50%;
  }
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const CommentContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  min-height: 100px;
  width: 38%;
  .comment-headers {
    font-size: 30px;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
    margin-left: 20px;
  }
  .submit-btn {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    margin-left: 75px;
    font-size: 17px;
    margin-bottom: 20px;
  }
  @media (max-width: 1600px) {
    width: 50%;
  }
  @media (max-width: 1300px) {
    width: 60%;
  }
  @media (max-width: 1100px) {
    width: 70%;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const Comment = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 20px;
  .user-img {
    width: 45px;
    height: 40px;
    border-radius: 50%;
    border: 0.5px solid lightgray;
    margin-left: 15px;
    margin-top: 2px;
  }
  @media (max-width: 500px) {
    .user-img {
      margin-left: 5px;
    }
  }
`;
export const CommentBox = styled.textarea`
  padding: 10px;
  font-size: 17px;
  border: 0.5px solid grey;
  overflow: hidden;
  margin-left: 20px;
  width: 70%;
  height: 60px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 500px) {
    font-size: 16px;
    margin-left: 15px;
  }
`;
export const AllComments = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Comments = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-left: 75px;
  border: 0.5px solid lightgray;
  width: 80%;
  margin-bottom: 70px;
  padding: 14px;
  border-radius: 10px;
  .comment-author {
    font-size: 18px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
  .comment-content {
    font-size: 19px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
  .comment-userImg {
    width: 40px;
    position: absolute;
    left: -60px;
    border-radius: 50%;
    border: 0.5px solid lightgray;
  }
  .reactions {
    display: flex;
    /* width:80%; */
    position: absolute;
    bottom: -60px;
    left: -5px;
  }
  .heart {
    width: 55px;
  }
  .heart-count {
    font-size: 18px;
    margin-top: 15px;
    margin-left: 3px;
  }
  @media (max-width: 500px) {
    padding: 2px 10px;
    font-size: 16px;

    .comment-userImg {
      /* left: -70px; */
      margin-right: 0px;
    }
    .comment-content {
      font-size: 16px;
    }
  }
`;
