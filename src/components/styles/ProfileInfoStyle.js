import styled from "styled-components";

export const Info = styled.div`
  margin-bottom: 40px;
  display: flex;
  position: relative;
  .property,
  .value {
    /* flex-basis: 50%; */
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
  .property {
    color: white;
    position: absolute;
    left: 14%;
  }
  .value {
    position: absolute;
    left: 39%;
    height: 30px;
    border: none;
    padding: 0px 10px;
    margin-right: 5px;
    width: 250px;
    outline-color: white;
    color: black;
    border-radius: 5px;
  }
  .value::placeholder {
    color: white;
  }
  @media (max-width: 480px) {
    .value,
    .property {
      font-size: 17px;
    }
    .property {
      left: 14%;
    }
    .value {
      left: 39%;
    }
  }
  @media (max-width: 448px) {
    .value {
      left: 37%;
      width: 240px;
    }
    .property {
      left: 13%;
    }
  }
  @media (max-width: 400px) {
    .value {
      left: 31.5%;
    }
    .property {
      left: 6%;
    }
  }
`;
export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  .btn-edit {
    width: 130px;
    margin: auto;
    margin-top: 20px;
  }
`;
