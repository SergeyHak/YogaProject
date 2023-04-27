import * as S from "./styles";
import ProfCard1 from "../../img/prof_card_1.png";
import ProfCard2 from "../../img/prof_card_2.png";
import ProfCard5 from "../../img/prof_card_5.png";
import { UserHeader } from "../../components/userHeader/userHeader";
export default function ProfilePage() {
  return (
    <S.ContainerDiv>
      <S.ContentDiv>
        <UserHeader />
        <S.SubTitleDiv>
          <S.TitleTextSpan>Мой профиль</S.TitleTextSpan>
          <S.TitleTextSpanLogin>Логин: sergey.petrov96</S.TitleTextSpanLogin>
          <S.TitleTextSpanPass>Пароль: 4fkhdj880d</S.TitleTextSpanPass>
        </S.SubTitleDiv>
        <S.ChangeLogPassDiv>
          <S.LogButton>Редактировать логин</S.LogButton>
          <S.PassButton>Редактировать пароль</S.PassButton>
        </S.ChangeLogPassDiv>
        <S.TitleCourseSpan>Мои курсы</S.TitleCourseSpan>
        <S.SportChoiceDiv>
          <S.SportDiv>
            <S.ProfCardImg src={ProfCard1} alt="prof_card_1" />
            <S.SportButton>Перейти →</S.SportButton>
          </S.SportDiv>
          <S.SportDiv>
            <S.ProfCardImg src={ProfCard2} alt="prof_card_2" />
            <S.SportButton>Перейти →</S.SportButton>
          </S.SportDiv>
          <S.SportDiv>
            <S.ProfCardImg src={ProfCard5} alt="prof_card_5" />
            <S.SportButton>Перейти →</S.SportButton>
          </S.SportDiv>
        </S.SportChoiceDiv>
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
