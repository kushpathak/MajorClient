import React, { useContext } from "react";
import { LoginContainer, LoginContent } from "./styles/LoginStyle";
import { Form, Button } from "react-bootstrap";
import { GlobalContainer } from "./styles/GlobalStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import axios from "axios";
import Footer from "./Footer";
import UrlEnums from "../Helpers/UrlEnums";
const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const user = useContext(UserContext);
  const handleSubmit = () => {
    axios
      .post(
        UrlEnums.LOGIN,
        {
          user_id: userName,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        user.setUserId(res.data.user_id);
        user.setImage(res.data.image);
        user.setJwt(res.data.jwt);
        console.log(user.jwt);
        navigate("/");
      })
      .catch((e) => {
        setUserNameError(null);
        setPasswordError(null);
        user.setUserId(null);
        user.setJwt(null);
        console.log(e);
      });
  };
  return (
    <GlobalContainer height="90vh">
      <LoginContainer id="signup">
        <LoginContent>
          <h3 className="login-header">Welcome to The Blog Man</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Enter User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Form.Text className="text-danger">{userNameError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="login-btn"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Log In
            </Button>
            <Form.Group>
              <Form.Text className="text-primary redirect">
                <Link to="/signup">New User? Please Sign Up</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </LoginContent>
      </LoginContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default Login;
