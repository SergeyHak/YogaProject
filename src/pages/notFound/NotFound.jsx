import { UserHeader } from "../../components/userHeader/userHeader";
import * as S from "./styles";


export default function NotFound() {
  
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
      <UserHeader />
      <S.HeadContentDiv>
          <S.SubTitleDiv>
            <S.TitleTextSpan name="top">
              Онлайн-тренировки для занятий дома
            </S.TitleTextSpan>
            <S.TitleTextSpanH>
              Ой... что-то пошло не так, такой страницы нет :)
            </S.TitleTextSpanH>
          </S.SubTitleDiv>
          
        </S.HeadContentDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
