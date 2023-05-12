import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/useAuth";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import * as A from "../../components/userHeader/styles";
import logo from "../../img/logo.png";
import SaleSticker from "../../img/Sale_sticker.png";
import UserPhoto from "../../img/EllipsePhoto.png";
import { removeUser } from "../../store/userSlice.js";

import ProfCard1 from "../../img/prof_card_1.png";
import ProfCard2 from "../../img/prof_card_2.png";
import ProfCard3 from "../../img/prof_card_3.png";
import ProfCard4 from "../../img/prof_card_4.png";
import ProfCard5 from "../../img/prof_card_5.png";

const courses = [
  { id: "ab1c3f", img: ProfCard1 },
  { id: "t4si4o", img: ProfCard2 },
  { id: "82kln2", img: ProfCard3 },
  { id: "9jp0yg", img: ProfCard4 },
  { id: "3bu6y5", img: ProfCard5 },
];

export default function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  let login = localStorage.getItem("login");
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => setVisible(!visible);
  const Exit = () => {
    dispatch(removeUser());
    navigate("/login", { replace: true });
  };
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <S.LogoTitleDiv>
          <S.LogoImg src={logo} alt="logo" />
          {isAuth ? (
            <A.UserDiv>
              <Link to="/profile">
                <A.UserPhotoImg src={UserPhoto} alt="userphoto" />
              </Link>
              <A.UserNameSpan onClick={toggleVisibility}>
                {login} ↓
              </A.UserNameSpan>
              {!visible && <S.ExitUser onClick={Exit}>Выход</S.ExitUser>}
            </A.UserDiv>
          ) : (
            <Link to="/login">
              <S.EnterButton>Войти</S.EnterButton>
            </Link>
          )}
        </S.LogoTitleDiv>
        <S.HeadContentDiv>
          <S.SubTitleDiv>
            <S.TitleTextSpan name="top">
              Онлайн-тренировки для занятий дома
            </S.TitleTextSpan>
            <S.TitleTextSpanH>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleTextSpanH>
          </S.SubTitleDiv>
          <S.SaleStickerImg src={SaleSticker} alt="SaleSticker" />
        </S.HeadContentDiv>
        <S.SportChoiceDiv>
          {courses.map((item) => (
            <Link key={item.id} to={`courses/${item.id}`}>
              <S.ProfCardImg src={item.img} alt="prof_card" />
            </Link>
          ))}
        </S.SportChoiceDiv>
        <S.ButtonDiv>
          <a href="#top">
            <S.UpButton>Наверх ↑</S.UpButton>
          </a>
        </S.ButtonDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
