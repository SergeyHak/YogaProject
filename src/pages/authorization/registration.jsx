import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../store/userSlice.js";
import * as S from "./style";
import logoBlack from "../../img/logoBlack.png";
import getError from "../../data/authErrors";
import { mutationUsersDatabase } from "../../services/mutationFirebaseUsersApi";

function Registration() {
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
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        mutationUsersDatabase(user.email);
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
        {/* <S.Inputs type="password" placeholder="Повторить пароль" /> */}
        <S.ErrorBox>
          <S.ErrorMessage>{getError(error, isClick)}</S.ErrorMessage>
        </S.ErrorBox>
        <S.OstiumButton onClick={handleLogin}>
          Зарегистрироваться
        </S.OstiumButton>
      </S.MeinBox>
    </S.Container>
  );
}

export default Registration;
