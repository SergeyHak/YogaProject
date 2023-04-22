import { Link } from "react-router-dom";
import * as S from "./style.jsx";
import logoBlack from "../../img/logoBlack.png";

function Login() {
  return (
    <S.Container>
      <S.MeinBox>
        <S.ImgLogo src={logoBlack} alt="logoBlack" />
        <S.Inputs type="text" placeholder="Логин" />
        <S.Inputs type="password" placeholder="Пароль" />
        <S.OstiumButton>Войти</S.OstiumButton>
        <Link to="/registration">
          <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
        </Link>
      </S.MeinBox>
    </S.Container>
  );
}

export default Login;
