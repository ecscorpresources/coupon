import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { GRID, HALFGRID, TextArea, TextInput } from "../FormControl";
import { MdPhotoCamera } from "react-icons/md";
import styled from "styled-components";
import icon from "../../assets/img/38.png";
import "../../css/settings.scss";

const Profile = () => {
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
            <p>User Profile</p>

            <form>
              <HALFGRID>
                <section className="file">
                  <article>
                    <div>
                      <input
                        type="file"
                        name="profileimage"
                        id="profileimage"
                      />
                      <label htmlFor="profileimage">
                        <MdPhotoCamera className="file-icon" /> Upload Profile
                        Image
                      </label>
                    </div>
                  </article>
                </section>
              </HALFGRID>
              <HALFGRID>
                <TextInput type="text" placeholder="Company/Store Name" />
              </HALFGRID>

              <HALFGRID>
                <TextInput type="text" placeholder="Enter link" />
              </HALFGRID>

              <GRID>
                <TextArea placeholder="About Company" />
              </GRID>

              <article>
                <button type="submit">UPDATE PROFILE</button>
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

  button {
    color: #fff;
    background-color: #1d9ed8;
    border: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 1.5rem;
    padding: 1rem 4rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 50px;
  }

  select {
    background: url(${icon});
    background-repeat: no-repeat;
    background-position: 95% center;
  }

  .file {
    margin-bottom: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    & h5 {
      padding-top: 1rem;
      padding-left: 1rem;
      font-weight: 600;
      color: grey;
      font-size: 1.5rem;
    }

    & article {
      align-self: center;
    }

    & input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    & label {
      font-size: 1.3rem;
      text-align: center;
      line-height: 1.3;
      cursor: pointer;
      font-weight: 600;
      color: grey;
    }

    .file-icon {
      font-size: 6rem;
      margin-right: 0.5rem;
    }
  }
`;

export default Profile;
