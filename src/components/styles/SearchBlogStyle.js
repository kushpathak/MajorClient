import styled from "styled-components";
export const SearchContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  .header {
    font-size: 27px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }
`;
export const BlogBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Blog = styled.div`
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: ${(props) => {
    // console.log(props);
    return props.change === 1 ? "85%" : "27%";
  }};
  background-color: ${(props) => {
    return props.change === 1 ? "lightgray" : "";
  }};
  margin-bottom: 40px;
  .blog-img {
    width: 100%;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
  }
  .title {
    margin-top: 20px;
    margin-left: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 35px;
    font-weight: 500;
  }
  @media (max-width: 1400px) {
    width: ${(props) => {
      return props.change === 1 ? "97%" : "40%";
    }};
  }
  @media (max-width: 1000px) {
    width: ${(props) => {
      return props.change === 1 ? "97%" : "50%";
    }};
  }
  @media (max-width: 800px) {
    width: ${(props) => {
      return props.change === 1 ? "97%" : "60%";
    }};
  }
  @media (max-width: 700px) {
    width: ${(props) => {
      return props.change === 1 ? "97%" : "70%";
    }};
  }
  @media (max-width: 600px) {
    @media (max-width: 800px) {
      width: ${(props) => {
        return props.change === 1 ? "97%" : "97%";
      }};
    }
  }
  @media (max-width: 500px) {
    width: ${(props) => {
      return props.change === 1 ? "97%" : "";
    }};
    .title {
      font-size: 30px;
    }
  }
  @media (max-width: 400px) {
    .title {
      font-size: 28px;
    }
  }
`;
