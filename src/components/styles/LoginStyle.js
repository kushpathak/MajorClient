import styled from "styled-components";
export const LoginContainer = styled.div`
  height: 490px;

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
export const LoginContent = styled.div`
  font-family: "Roboto", sans-serif;
  margin-top: 50px;
  width: 70%;
  font-size: 20px;
  .login-header {
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 25px;
  }
  .redirect {
    font-size: 20px;
    margin-left: 63px;
    /* margin-top: 20px; */
  }
  .login-btn {
    display: block;
    margin: auto;
    margin-top: 50px;
    width: 100px;
    font-size: 16px;
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 550px) {
    .redirect {
      font-size: 18px;
      margin-left: 50px;
    }
    .login-btn {
      margin-bottom: 20px;
    }
  }
  @media (max-width: 400px) {
    .login-header {
      font-size: 21px;
    }
    font-size: 17px;
    width: 80%;
  }
`;
