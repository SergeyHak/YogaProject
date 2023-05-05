import { Link } from "react-router-dom";

import * as S from "./styles";
import logo from "../../img/logo.png";
import SaleSticker from "../../img/Sale_sticker.png";
import ProfCard1 from "../../img/prof_card_1.png";
import ProfCard2 from "../../img/prof_card_2.png";
import ProfCard3 from "../../img/prof_card_3.png";
import ProfCard4 from "../../img/prof_card_4.png";
import ProfCard5 from "../../img/prof_card_5.png";

export default function MainPage() {
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <S.LogoTitleDiv>
          <S.LogoImg src={logo} alt="logo" />
          <Link to="/login">
            <S.EnterButton>Войти</S.EnterButton>
          </Link>
        </S.LogoTitleDiv>
        <S.HeadContentDiv>
          <S.SubTitleDiv>
            <S.TitleTextSpan>
              Онлайн-тренировки для занятий дома
            </S.TitleTextSpan>
            <S.TitleTextSpanH>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleTextSpanH>
          </S.SubTitleDiv>
          <S.SaleStickerImg src={SaleSticker} alt="SaleSticker" />
        </S.HeadContentDiv>
        <S.SportChoiceDiv>
          <Link to="/yoga">
            <S.ProfCardImg src={ProfCard1} alt="prof_card_1" />
          </Link>
          <Link to="/stretching">
            <S.ProfCardImg src={ProfCard2} alt="prof_card_2" />
          </Link>
          <Link to="/dance-fitness">
            <S.ProfCardImg src={ProfCard3} alt="prof_card_3" />
          </Link>
          <Link to="/step-aerobics">
            <S.ProfCardImg src={ProfCard4} alt="prof_card_4" />
          </Link>
          <Link to="/bodyflex">
            <S.ProfCardImg src={ProfCard5} alt="prof_card_5" />
          </Link>
        </S.SportChoiceDiv>
        <S.ButtonDiv>
          <S.UpButton>Наверх ↑</S.UpButton>
        </S.ButtonDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
