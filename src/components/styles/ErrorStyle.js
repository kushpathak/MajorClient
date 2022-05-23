import styled from "styled-components";
export const ErrorBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  .error-img {
    width: 400px;
    height: 400px;
  }
  .error-content {
    margin-top: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .emoji {
    margin-bottom: 20px;
    font-size: 80px;
  }
  .header {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 35px;
  }
  .btn-retry {
    border-radius: 5px;
    font-family: "Poppins", sans-serif;
    border: none;
    padding: 8px 15px;
    font-size: 20px;
    margin-top: 20px;
    letter-spacing: 0.5px;
  }
`;
