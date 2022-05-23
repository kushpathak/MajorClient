import styled from "styled-components";
export const Topics = styled.div`
  margin-right: 90px;
  margin-left: -150px;
  margin-top: 100px;
  .topic-list {
    list-style-type: none;
    overflow: hidden;
  }
  .topic {
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    margin-top: 28px;
    font-weight: 400;
    padding: 3px 4px;
    border-radius: 5px;
    color: black;
    transition: background-color 0.3s ease-out;
    :hover {
      background-color: lightgrey;
      color: blue;
      cursor: pointer;
    }
    @media (max-width: 1213px) {
      font-size: 16px;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
  @media (max-width: 1213px) {
    margin-left: -10px;
  }
`;
