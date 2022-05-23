import styled from "styled-components";
export const NewBlogContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px; ;
`;
export const NewBlogForm = styled.div`
  position: relative;
  background-color: white;
  width: 40%;
  height: 85%;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  @media (max-width: 1599px) {
    height: 85%;
    width: 50%;
  }
  @media (max-width: 1131px) {
    width: 60%;
  }
  @media (max-width: 956px) {
    width: 70%;
  }
  @media (max-width: 806px) {
    width: 80%;
  }
  @media (max-width: 659px) {
    width: 90%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;
export const FormContent = styled.form`
  margin-left: 40px;
  margin-right: 20px;
  margin-top: 30px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  .cover-image {
    width: 180px;
    border: 3px solid lightgray;
    border-radius: 5px;
    padding: 5px 5px;
    background-color: white;
    font-size: 18px;
    margin-bottom: 20px;
  }
  #inpfile {
    display: none;
  }
  @media (max-width: 450px) {
    margin-left: 10px;
  }
`;
export const Input = styled.textarea`
  overflow: hidden;

  height: ${(props) => {
    return props.height ? props.height : "";
  }};
  resize: none;
  /* max-height: "400px"; */
  border: none;
  font-family: "Roboto", sans-serif;
  padding: 1px 5px;
  width: 80%;
  margin-top: ${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  outline: none;
  @media (max-width: 1599px) {
    font-size: ${(props) => props.secondary};
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.small};
  }
`;
export const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  bottom: 20px;
  justify-content: center;
  .preview-end {
    position: absolute;
    bottom: -10px;
  }
`;
export const SubmitBtn = styled.button`
  /* margin-top: 260px; */

  margin-right: 15px;
  border: none;
  padding: 5px 5px;
  font-size: 18px;
  width: 100px;
  border-radius: 5px;
  /* color: white; */
  @media (max-width: 1200px) {
    width: 80px;
    font: 16px;
    padding: 4px 4px;
  }
`;
export const PreviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 80%;
  width: 40%;
  border-radius: 10px;
  border: 1px solid lightgray;
  @media (max-width: 1330px) {
    width: 50%;
  }
  @media (max-width: 1012px) {
    width: 60%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 670px) {
    width: 80%;
  }
  @media (max-width: 590px) {
    width: 100%;
  }
`;
export const Header = styled.div`
  font-size: ${(props) => props.fontSize};
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => props.fontWeight};
  margin: 20px 40px;
  max-height: 500px;
  overflow-y: ${(props) => {
    return props.overflow ? "auto" : "none";
  }};
  @media (max-width: 590px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const PreviewBtn = styled.div`
  width: 100px;
  border: none;
  padding: 10px 10px;
  padding-left: 24px;
  border-radius: 5px;
  font-size: 18px;
`;
