import React from "react";
import authImg from "../../assets/icons/authImg.svg";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  Container,
  Wrapper,
  FormContainer,
  Icons,
  FormStyled,
  AuthImg,
} from "./RegisterStyle";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <h2>Qeydiyyat</h2>
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
              <label>Ad, Soyad</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Ad və soyadınızı daxil edin"
              />
            </div>

            <div>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="nümunə@gmail.com"
              />
            </div>

          
            <div>
              <label>Şifrə</label>
              <input
                type="password"
                name=""
                id="password"
                placeholder="Şifrənizi daxil edin"
              />
            </div>

            <div>
              <label>Şifrə təkrarı</label>
              <input
                type="password"
                name=""
                id="passwordConfirm"
                placeholder="Şifrənizi təkrar daxil edin"
              />
            </div>

            <div>
              <input type="checkbox" name="checkbox" />
              <p> İstifadəçi şərtləri ilə razıyam</p>
            </div>
            <button type="submit">Qeydiyyat</button>
          </FormStyled>
        </FormContainer>
        <AuthImg>
          <img src={authImg} alt="" />
          <p className="navigate">
            Artıq hesabınız var? <Link to={"/login"}>Daxil olun </Link>
          </p>
        </AuthImg>
      </Wrapper>
    </Container>
  );
};

export default Register;
