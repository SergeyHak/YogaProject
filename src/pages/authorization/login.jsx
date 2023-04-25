import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice.js";

import * as S from "./style.jsx";
import logoBlack from "../../img/logoBlack.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  console.log(email, pass);

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
      .catch(console.error);
      
  }

  return (
    <S.Container>
      <S.MeinBox>
        <S.ImgLogo src={logoBlack} alt="logoBlack" />
        <S.Inputs
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Inputs
          type="password"
          placeholder="Пароль"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <S.OstiumButton onClick={handleLogin}>Войти</S.OstiumButton>
        <Link to="/registration">
          <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
        </Link>
      </S.MeinBox>
    </S.Container>
  );
}

export default Login;
