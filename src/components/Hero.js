import React from "react";
import styled from "styled-components";
import heroimagelarge from "../assets/img/02.png";

const Hero = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>;
};

const HeroWrapper = styled.section`
  background-image: url(${heroimagelarge});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  display: flex;
  align-items: center;
  padding-left: 20rem;
  margin-top: -14rem;
  min-height: 100vh;

  @media screen and(max-width:768px) {
    padding-left: 0;
    text-align: center;
    justify-content: center;
  }

  & h2 {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.5;
    color: #0c74c4;
  }

  p {
    font-size: 1.5rem;
    color: #727376;
  }
`;
export default Hero;
