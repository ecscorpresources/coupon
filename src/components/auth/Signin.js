import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { PrimaryLink } from "../globals/links-button";
import Signup from "./Signup";
import styled from "styled-components";

const SignIn = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <PrimaryLink primary="true" to="/" onClick={toggle}>
        Join For Free
      </PrimaryLink>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalWrapper>
          <ModalBody>
            <div className="close">
              <img
                src={require("../../assets/img/close.png")}
                alt=""
                onClick={closeModal}
              />
            </div>

            <form>
              <div>
                <h1>Login</h1>
                <span>Don't have an account?</span>

                <Signup />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <Link>forget password?</Link>
              </div>
              <div>
                <LoginLink onClick={toggle} to="/dashboard">
                  LOGIN IN
                </LoginLink>
              </div>
            </form>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const LoginLink = styled(PrimaryLink)`
  display: block;
  background-color: #606c86;
  color: #fff;
  border: none;

  &:hover {
    color: #fff;
  }
`;

const ModalWrapper = styled.section`
  .close {
    cursor: pointer;
  }
  form {
    padding-top: 40px;
    padding-bottom: 40px;
    & h1 {
      color: #2e5c71;
      font-size: 25px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      padding-bottom: 1rem;
    }

    & span {
      color: #2e5c71;
      font-size: 1rem;
      display: inline-block;
      margin-right: 0.5rem;
    }

    & > div {
      width: 85%;
      margin: auto;

      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    & div:first-child {
      a {
        color: #f58634;
        font-size: 0.9rem;
        text-decoration: underline;
      }
    }

    & div:nth-child(4) {
      text-align: right;

      a {
        text-decoration: underline;
        color: #2e5c71;
        font-size: 0.9rem;
      }
    }

    & input {
      width: 100%;
      border: 1px solid #2e5c71;
      padding: 8px 0 8px 10px;
      border-radius: 4px;

      &::placeholder {
        font-size: 14px;
        color: #2e5c71;
      }
    }
  }
`;

export default SignIn;
