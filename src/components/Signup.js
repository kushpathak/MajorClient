import React, { useEffect, useState } from "react";
import { GlobalContainer } from "./styles/GlobalStyle";
import { SignUpContainer, SignupContent } from "./styles/SignupStyle";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import UrlEnums from "../Helpers/UrlEnums";
const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  useEffect(() => {
    setUserError(null);
    setEmailError(null);
    setPasswordError(null);
  }, []);
  useEffect(() => {
    var total =
      (userError === null) + (emailError === null) + (passwordError === null);
    total = 3 - total;
    var ele = document.getElementById("signup");
    if (total === 3) {
      ele.style.height = "550px";
    } else if (total === 2) {
      ele.style.height = "510px";
    } else if (total === 0) {
      ele.style.height = "490px";
    }
  }, [userError, emailError, passwordError]);
  const handleSubmit = () => {
    axios
      .post(UrlEnums.SIGNUP, {
        userName,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((e) => {
        // console.log(e.response);
        const error = e.response.data;
        setUserError(null);
        setPasswordError(null);
        setEmailError(null);
        Object.keys(error).forEach((ele) => {
          if (error[ele] !== null) {
            if (ele === "userName") {
              setUserError(error[ele]);
            }
            if (ele === "password") {
              setPasswordError(error[ele]);
            }
            if (ele === "email") {
              setEmailError(error[ele]);
            }
          }
        });
      });
  };
  return (
    <GlobalContainer height="90vh">
      <SignUpContainer id="signup">
        <SignupContent>
          <h3 className="signup-header">Welcome to The Blog Man</h3>
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
              <Form.Text className="text-danger">{userError}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-danger">{emailError}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="signup-btn"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Sign Up
            </Button>
          </Form>
        </SignupContent>
      </SignUpContainer>
      <Footer />
    </GlobalContainer>
  );
};

export default Signup;
