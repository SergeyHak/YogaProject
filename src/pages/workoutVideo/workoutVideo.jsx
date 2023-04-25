import * as S from "./styles";
import logoBlack from "../../img/logoBlack.png";
import UserPhoto from "../../img/EllipsePhoto.png";

export default function WorkoutPage() {
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <S.HeadContentDiv>
          <S.LogoTitleDiv>
            <S.LogoImg src={logoBlack} alt="logo" />
          </S.LogoTitleDiv>
          <S.UserDiv>
            <S.UserPhotoImg src={UserPhoto} alt="userphoto" />
            <S.UserNameSpan>Сергей ↓</S.UserNameSpan>
          </S.UserDiv>
        </S.HeadContentDiv>
        <S.SubTitleDiv>
          <S.TitleTextSpan>Мой профиль</S.TitleTextSpan>
        </S.SubTitleDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
