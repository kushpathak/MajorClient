import styled from "styled-components";
export const GlobalContainer = styled.div`
  width: 100%;
  background-color: whitesmoke;
  height: ${(props) => {
    return props.height !== undefined ? props.height : "79vh";
  }};
  display: flex;
  justify-content: center;
`;
