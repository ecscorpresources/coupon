import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import { TextInput, GRID } from "./FormControl";
import styled from "styled-components";

const ForgetPassword = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <Link primary to="#!" onClick={toggle}>
        Forgot Your Password?
      </Link>
      <Modal isOpen={modal} toggle={toggle} size="md">
        <ModalWrapper>
          <ModalBody>
            <div className="close">
              <img
                src={require("../assets/img/close.png")}
                alt=""
                onClick={closeModal}
              />
            </div>

            <div className="form-body">
              <div>
                <h3>Forgot Password?</h3>
                <h4>Enter email</h4>
                <p>A link will be sent to your email to reset your password</p>
              </div>

              <form>
                <GRID>
                  <TextInput type="password" />
                </GRID>

                <button>EDIT</button>
                <Link to="/dashboard-candidate">Cancel</Link>
              </form>
            </div>
          </ModalBody>
        </ModalWrapper>
      </Modal>
    </>
  );
};

const ModalWrapper = styled.section`
  .form-body {
    padding: 3rem 2rem;

    h3 {
      color: #606c86;
      font-weight: 600;
      font-size: 1.6rem;
      font-family: "Open Sans", sans-serif;
      padding-bottom: 5rem;
    }

    h4 {
      color: #606c86;
      font-weight: 600;
      font-size: 1.6rem;
      font-family: "Open Sans", sans-serif;
    }

    p {
      font-size: 1.3rem;
      font-weight: 600;
      color: #606c86;
      font-family: "Open Sans", sans-serif;
      padding-bottom: 1rem;
    }

    a {
      text-decoration: underline;
      font-size: 1.2rem;
      font-weight: 600;
      color: #606c86;
      display: inline-block;
      position: relative;
      left: 8px;
      top: 9px;

      &:hover {
        text-decoration: underline;
        font-size: 1.2rem;
        font-weight: 600;
        color: #606c86;
      }
    }
  }
  form {
    padding: 0;

    button {
      border: none;
      color: #fff;
      background: #606c86;
      display: inline-block;
      padding: 0.6rem 4rem;
      font-size: 1.5rem;
      border-radius: 50px;
      margin-top: 4rem;
    }
  }
`;

export default ForgetPassword;
