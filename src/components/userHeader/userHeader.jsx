import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/use-auth";
import { removeUser } from "../../store/userSlice.js";

import * as S from "./styles";
import * as A from "../../pages/coursePage/styles";

import logoBlack from "../../img/logoBlack.png";
import UserPhoto from "../../img/EllipsePhoto.png";

export function UserHeader() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
  const { isAuth } = useAuth();

  const [visible, setVisible] = useState(true);
  let login = localStorage.getItem("login");
  
  const toggleVisibility = () => setVisible(!visible)
  const Exit = () => {
    dispatch(removeUser());
    navigate("/login", { replace: true });

  }

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
            <Link to="/profile">
              <S.UserPhotoImg src={UserPhoto} alt="userphoto" />
            </Link>
            <S.UserNameSpan onClick={toggleVisibility}>
              {login} ↓
            </S.UserNameSpan>
            {!visible && <S.ExitUser onClick={Exit}>Выход</S.ExitUser>}
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
