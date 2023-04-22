import logoBlack from "../../img/logoBlack.png";

import * as S from "./style";

function Registration() {
  return (
    <S.Container>
      <S.MeinBox>
        <S.ImgLogo src={logoBlack} alt="logoBlack" />
        <S.Inputs type="text" placeholder="Логин" />
        <S.Inputs type="password" placeholder="Пароль" />
        <S.Inputs type="password" placeholder="Повторить пароль" />
        <S.OstiumButton>Войти</S.OstiumButton>
      </S.MeinBox>
    </S.Container>
  );
}

export default Registration;
