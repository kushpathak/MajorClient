import styled from "styled-components";
export const SignUpContainer = styled.div`
  height: 500px;
  width: 520px;
  background-color: white;
  border-radius: 8px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  border: 0.5px solid lightgray;
  @media (max-width: 550px) {
    width: 90%;
  }
  @media (max-width: 470px) {
    width: 100%;
  }
`;
export const SignupContent = styled.div`
  font-family: "Roboto", sans-serif;
  margin-top: 50px;
  width: 70%;
  font-size: 20px;
  .signup-header {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 25px;
  }
  .signup-btn {
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 100px;
    font-size: 16px;
    margin-bottom: 12px;
  }
  .redirect {
    font-size: 20px;
    margin-left: 63px;
    @media (max-width: 537px) {
      font-size: 17px;
      margin-left: 47px;
    }
    @media (max-width: 380px) {
      margin-left: 40px;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 400px) {
    .signup-header {
      font-size: 21px;
    }
    font-size: 17px;
    width: 80%;
  }
`;
