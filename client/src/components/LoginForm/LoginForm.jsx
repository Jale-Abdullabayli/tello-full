import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import authImg from "../../assets/icons/authImg.svg";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  FormContainer,
  Icons,
  FormStyled,
  AuthImg,
} from "./LoginStyle";

const LoginForm = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h2>Daxil ol</h2>
          <Icons>
            <div className="icon">
              <span>
                <FaFacebookF />
              </span>
              <p>Facebook ilə</p>
            </div>
            <div className="icon">
              <span className="google">
                <BsGoogle />
              </span>

              <p>Google ilə</p>
            </div>
          </Icons>
          <p>və ya</p>
          <FormStyled>
            <div>
              <label>E-mail</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="nümunə@gmail.com"
              />
            </div>
            <div>
              <label>Şifrə</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="***********"
              />
            </div>
            <button>Daxil ol</button>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt="" />
          <p>
            Hesabınız yoxdur? <Link to={"/register"}>Qeydiyyatdan keçin</Link>
          </p>
        </AuthImg>
      </Wrapper>
    </Container>
  );
};

export default LoginForm;
