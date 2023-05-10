import { Link } from "react-router-dom";
import { useAuth } from "../../store/hooks/use-auth";

import * as S from "./styles";
import * as A from "../../pages/coursePage/styles";

import logoBlack from "../../img/logoBlack.png";
import UserPhoto from "../../img/EllipsePhoto.png";

export function UserHeader() {
  const { isAuth } = useAuth();

  return (
    <div>
      {isAuth ? (
        <S.HeadContentDiv>
          <S.LogoTitleDiv>
            <Link to="/">
              <S.LogoImg src={logoBlack} alt="logo" />
            </Link>
          </S.LogoTitleDiv>
          <S.UserDiv>
            <S.UserPhotoImg src={UserPhoto} alt="userphoto" />
            <S.UserNameSpan>Сергей ↓</S.UserNameSpan>
          </S.UserDiv>
        </S.HeadContentDiv>
      ) : (
        <A.TitleBlock>
          <Link to="/">
            <A.LogoImg src={logoBlack} alt="logoBlack" />
          </Link>
          <Link to="/login">
            <A.EnterButton>Войти</A.EnterButton>
          </Link>
        </A.TitleBlock>
      )}
    </div>
  );
}
