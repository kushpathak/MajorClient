import React from "react";
import { FooterContainer, FooterContent } from "./styles/FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h5 className="footer-content">
          © The Blog Man 2021 . All Rights Reserved
        </h5>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
