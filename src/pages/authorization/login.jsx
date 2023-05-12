import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice.js";
import * as S from "./style.jsx";
import logoBlack from "../../img/logoBlack.png";
import getError from "../../data/authErrors";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [isClick, setIsClick] = useState("false");
  localStorage.setItem("login", email);
  localStorage.setItem("pass", pass);
 
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/profile", { replace: true });
      })

      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIsClick(!!err.message);
      });
  };

  return (
    <S.Container>
      <S.MeinBox>
        <Link to="/">
          <S.ImgLogo src={logoBlack} alt="logoBlack" />
        </Link>
        <S.Inputs
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setIsClick("false");
          }}
        />
        <S.Inputs
          type="password"
          placeholder="Пароль"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
            setError("");
            setIsClick("false");
          }}
        />
        <S.ErrorBox>
          <S.ErrorMessage>{getError(error, isClick)}</S.ErrorMessage>
        </S.ErrorBox>
        <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
        <Link to="/registration">
          <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
        </Link>
      </S.MeinBox>
    </S.Container>
  );
}
export default Login;
