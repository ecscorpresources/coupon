import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { HALFGRID, TextInput } from "../FormControl";
import "../../css/changepassword.scss";
import ForgotPassword from "../ForgotPassword";

const ChangePassword = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>
        <SettingsWrapper className="settingsFirstSection">
          <div>
            <NavLink activeClassName="active" to="/profile">
              Edit Profile
            </NavLink>
            <NavLink activeClassName="active" to="/changepassword">
              Change Password
            </NavLink>
          </div>

          <div>
            <p>Change Password</p>
            <form>
              <HALFGRID>
                <TextInput type="text" placeholder="Current Password" />
              </HALFGRID>

              <HALFGRID>
                <TextInput type="text" placeholder="New Password" />
              </HALFGRID>

              <HALFGRID>
                <TextInput type="text" placeholder="Re-type New Password" />
              </HALFGRID>

              <article>
                <ForgotPassword />
              </article>

              <article>
                <button type="submit">Change Password</button>
              </article>
            </form>
          </div>
        </SettingsWrapper>
      </FadeIn>
    </>
  );
};

const SettingsWrapper = styled.section`
  width: 45vw;
  margin-left: 10rem;
  padding: 4rem 0;
  @media (max-width: 992px) {
    width: 70vw;
    margin: 0 auto;
  }

  p {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    color: #0c74c4;
    font-family: "Open Sans", sans-serif;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    color: #0c74c4;
    display: inline-block;
    margin-bottom: 4rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      color: #0c74c4;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  & form {
    article:nth-child(4) {
      margin-bottom: 1.5rem;
    }
    button {
      color: #fff;
      background-color: #1d9ed8;
      border: none;
      text-decoration: none;
      text-align: center;
      display: inline-block;
      font-size: 1.5rem;
      padding: 0.8rem 4rem;
      font-family: "Open Sans", sans-serif;
      border-radius: 50px;
    }

    a {
      text-decoration: underline;
      color: #094a6a;
      font-size: 1.3rem;
      display: inline-block;

      &:hover {
        text-decoration: underline;
        color: #094a6a;
        font-size: 1.3rem;
        display: inline-block;
      }
    }
  }
`;

export default ChangePassword;
