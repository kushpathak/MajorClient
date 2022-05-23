import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: lightgray;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 80px;
  /* margin-bottom: -29px; */
`;
export const FooterContent = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  .footer-content {
    color: black;
    font-size: 20px;
  }
  @media (max-width: 400px) {
    .footer-content {
      font-size: 18px;
    }
  }
`;
