import React, { useState } from "react";
import authImg from "../../assets/icons/authImg.svg";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { signup } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Wrapper,
  FormContainer,
  Icons,
  FormStyled,
  AuthImg,
} from "./RegisterStyle";
import { Link } from "react-router-dom";
import Toastify from "../Toastify/Toastify";
import { toast } from 'react-toastify';

const formInit = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: ""
}

const Register = () => {
  const [formData, setFormData] = useState(formInit);

  const { error } = useSelector(state => state.authReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(signup(formData));
      if (!response?.error) {
        toast.success('Registered successfully')
      }
      else {
        toast.error(error)
      }
    } catch (err) {

    }
  }

  return (
    <Container>
      <Toastify />
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
         
          <FormStyled onSubmit={register}>
            <div>
              <label>Ad</label>
              <input
                onChange={onChangeHandler}
                type="text"
                name="name"
                id="name"
                placeholder="Adınızı daxil edin"
              />
            </div>

            <div>
              <label>E-mail</label>
              <input
                onChange={onChangeHandler}
                type="email"
                name="email"
                id="email"
                placeholder="nümunə@gmail.com"
              />
            </div>


            <div>
              <label>Şifrə</label>
              <input
                onChange={onChangeHandler}
                type="password"
                name="password"
                id="password"
                placeholder="Şifrənizi daxil edin"
              />
            </div>

            <div>
              <label>Şifrə təkrarı</label>
              <input
                onChange={onChangeHandler}
                type="password"
                name="passwordConfirm"
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
