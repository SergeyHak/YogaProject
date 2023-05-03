import * as S from "./styles";
import { useState } from "react";
import ProfCard1 from "../../img/prof_card_1.png";
import ProfCard2 from "../../img/prof_card_2.png";
import ProfCard5 from "../../img/prof_card_5.png";
import { UserHeader } from "../../components/userHeader/userHeader";
import SelectWorkoutWindow from "../../components/select_workout/select_workout";

export default function ProfilePage({email}) {
 
  let login = localStorage.getItem("login");
  let pass = localStorage.getItem('pass');
  const [SelectWorkout, setSelectWorkout] = useState(false);
  const [edit, setEdit] = useState(false);
  const[valueMail, setValueMail] = useState(login);
  const [editPass, setEditPass] = useState(false);
  const[valuePass, setValuePass] = useState(pass);
  const toggleTrening = () => {
    if (SelectWorkout) {
      setSelectWorkout(false);
    } else {
      setSelectWorkout(true);
    }
  };    

  return (
    <S.ContainerDiv>
      {SelectWorkout === true ? (
        <SelectWorkoutWindow
          active={SelectWorkout}
          setActive={setSelectWorkout}
        />
      ) : null}
      <S.ContentDiv>
        <UserHeader />
        <S.SubTitleDiv>
          <S.TitleTextSpan>Мой профиль</S.TitleTextSpan>
          <S.TitleTextSpanLogin>Логин:<S.SpanText>{valueMail}</S.SpanText> </S.TitleTextSpanLogin>
          {edit ? (
            <div>
              <S.UserLoginInput onChange={(e) => setValueMail(e.target.value)} value={valueMail}/>
              <S.LoginButton onClick={() => setEdit(false)}>Сохранить</S.LoginButton>
            </div>
          ) : null}
          <S.TitleTextSpanPass>Пароль:<S.SpanText>{valuePass}</S.SpanText> </S.TitleTextSpanPass>
          {editPass ? (
            <div>
              <S.UserLoginInput onChange={(e) => setValuePass(e.target.value)} value={valuePass}/>
              <S.LoginButton onClick={() => setEditPass(false)}>Сохранить</S.LoginButton>
            </div>
          ) : null}
        </S.SubTitleDiv>
        <S.ChangeLogPassDiv>
          <S.LogButton onClick={() => setEdit(true)}>
            Редактировать логин
          </S.LogButton>
          <S.PassButton onClick={() => setEditPass(true)} >Редактировать пароль</S.PassButton>
        </S.ChangeLogPassDiv>
        <S.TitleCourseSpan>Мои курсы</S.TitleCourseSpan>
        <S.SportChoiceDiv>
          <S.SportDiv>
            <S.ProfCardImg src={ProfCard1} alt="prof_card_1" />
            <S.SportButton onClick={toggleTrening}>Перейти →</S.SportButton>
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
