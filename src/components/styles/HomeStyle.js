import styled from "styled-components";
export const ErrorContainer = styled.div`
  width: 100%;
  height: ${(props) => {
    return props.height ? props.height : "100%";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  .blog-container {
    display: flex;
    flex-direction: column;
    /* align-item: center; */
    @media (max-width: 550px) {
      width: 100%;
    }
  }
`;
export const SideItems = styled.div`
  flex-basis: 33%;
  @media (max-width: 1100px) {
    flex-basis: 0%;
    display: none;
  }
`;
export const Scrollable = styled.div`
  /* margin-top: 20px; */
  height: 80vh;
  width: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }
  .img-container {
    position: relative;
    text-align: center;
    color: white;
  }
  .cover {
    margin-right: -30px;
    margin-left: -15px;
    margin-top: 200px;
    width: 100%;
    height: fit-content;
  }
  .img-content {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    overflow: hidden;
  }
  .img-content-header {
    font-size: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: black;
    outline: none;
    @media (max-width: 475px) {
      font-size: 23px;
    }
    /* overflow: hidden; */
  }
  .explore {
    border: none;
    margin-top: 100px;
    padding: 8px 10px;
    font-size: 20px;
    border-radius: 5px;
    @media (max-width: 475px) {
      padding: 4px 5px;
      font-size: 15px;
    }
  }
`;
export const BlogContainer = styled.div`
  margin-top: 40px;
  height: 70vh;
  width: 70%;
  @media (max-width: 1300px) {
    width: 85%;
  }
  @media (max-width: 1100px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 85%;
  }
  @media (max-width: 650px) {
    width: 95%;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-right: -17px;
  }
`;
export const BlogBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 0.5px solid lightgray;
  :hover {
    cursor: pointer;
  }
  .blog-img {
    height: 320px;
    /* border-radius: 10px; */
    @media (max-width: 460px) {
      height: 250px;
    }
  }
`;
export const BlogContent = styled.div`
  /* overflow-x: hidden; */
  font-family: "Roboto", sans-serif;
  padding: 5px 20px;
  position: relative;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: column;
  background-color: #fdfeff;
  margin-top: ${(props) => {
    return props.marginTop ? props.marginTop : "";
  }};
  .person-icon {
    position: absolute;
    width: 45px;
    top: 11px;
    border-radius: 50%;
  }
  .blog-user {
    display: flex;
    flex-direction: column;
    margin: 0px;
    margin-top: 10px;
    margin-left: 60px;
  }
  .blog-userName,
  .blog-date {
    font-family: "Open-Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  .blog-userName {
    font-family: "Poppins", sans-serif;
    margin-bottom: 2px;
  }
  .blog-title {
    font-family: "Poppins", sans-serif;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 35px;
    font-weight: 600;
    margin-left: 60px;
    @media (max-width: 1200px) {
      font-size: 30px;
    }
    @media (max-width: 475px) {
      margin-left: 10px;
    }
    @media (max-width: 475px) {
      font-size: 20px;
    }
    /* margin-left: 20px; */
  }
`;
export const TagContainer = styled.div`
  display: flex;
  margin-left: ${(props) => {
    return props.marginLeft ? props.marginLeft : "60px";
  }};
  font-family: "Poppins", sans-serif;
  margin-bottom: ${(props) => {
    return props.marginBottom ? props.marginBottom : "0px";
  }};
  .tag {
    margin-right: 20px;
    font-weight: ${(props) => {
      return props.fontWeight ? props.fontWeight : "400";
    }};
    font-size: 17px;
    @media (max-width: 420px) {
      margin-right: 10px;
      font-size: 14px;
    }
  }
  @media (max-width: 475px) {
    margin-left: 10px;
  }
`;
export const ReactionContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 0px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 475px) {
    margin-left: 0px;
  }
`;
export const ReactionList = styled.ul`
  text-decoration: none;
  @media (max-width: 475px) {
    margin-left: -35px;
  }
`;
export const List = styled.li`
  display: inline-block;
  margin-right: ${(props) => props.marginRight};

  .heart {
    width: 60px;
  }
  .comment {
    width: 30px;
  }
  .text {
    margin-top: 2px;
    font-size: 18px;
  }
  .save-btn {
    border: none;
    padding: 3px;
    border-radius: 4px;
    width: 70px;
    font-size: 16px;
    margin-top: 5px;
    margin-right: 25px;
  }
`;
