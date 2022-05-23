import styled from "styled-components";
export const ProfileContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea); */
`;
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
  overflow: hidden;

  padding: 40px 0px;
  border-radius: 10px;
  margin-bottom: 30px;
  .btn-edit {
    /* width: 30px; */
    font-weight: 400;
    margin-top: 40px;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    border: none;
    padding: 6px 8px;
    border-radius: 5px;
    margin-bottom: 30px;
  }
  #inpfile {
    display: none;
  }
  @media (max-width: 1599px) {
    width: 35%;
  }
  @media (max-width: 1386px) {
    width: 40%;
  }
  @media (max-width: 1275px) {
    width: 50%;
  }
  @media (max-width: 1002px) {
    width: 60%;
  }
  @media (max-width: 793px) {
    width: 70%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 610px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 270px;
  height: 250px;
  border-radius: 50%;
`;
export const NavigationContainer = styled.div`
  margin-top: 20px;
  .link {
    font-size: 20px;
    color: white;
  }
  .link:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .breadcrumb {
    color: white;
  }
`;
