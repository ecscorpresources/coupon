import styled from "styled-components";
import { Link } from "react-router-dom";

export const PrimaryLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 50px;
  padding: 3px 20px;
  font-family: "Open Sans", sans-serif;
`;

export const SecondaryLink = styled(Link)`
  color: #fff;
  background-color: #fff;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: 13px;
  padding: 7px 10px;
  font-family: "Open Sans", sans-serif;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #606c86;
  color: #fff;
  border-radius: 4px;
  padding: 10px 35px;
  display: block;
  text-align: center;
  width: ${(props) => (props.hallwidth ? "" : "100%")};
  border: none;
`;

export const SecondaryButton = styled.button`
  background-color: #5e8799;
  color: #fff;
  border-radius: 4px;
  padding: 10px 35px;
  display: block;
  text-align: center;
  border: none;
`;
