import * as S from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import ProfCard1 from "../../img/prof_card_1.png";
// import ProfCard2 from "../../img/prof_card_2.png";
// import ProfCard3 from "../../img/prof_card_3.png";
// import ProfCard4 from "../../img/prof_card_4.png";
// import ProfCard5 from "../../img/prof_card_5.png";
import { UserHeader } from "../../components/userHeader/userHeader";
import SelectWorkoutWindow from "../../components/select_workout/select_workout";
import { useEmailChangeMutation } from "../../api/api";
import { usePassChangeMutation } from "../../api/api";
import { UserToken } from "../../api/api";
import { useQueryUsersCourseDatabase } from "../../services/queryFirebaseUsersApi";

export default function ProfilePage() {
   const [changeEmail, {error, isLoading }] = useEmailChangeMutation();
  const [changePass] = usePassChangeMutation();
  const Tokens = UserToken();
  let login = localStorage.getItem("login");
  let pass = localStorage.getItem("pass");
  // const payProductYoga = useSelector((state) => state.pay.yoga);
  const [SelectWorkout, setSelectWorkout] = useState(false);

  const [edit, setEdit] = useState(false);
  const [valueMail, setValueMail] = useState(login);
  localStorage.setItem("userMail", valueMail);
  const [editPass, setEditPass] = useState(false);
  const [valuePass, setValuePass] = useState(pass);
  localStorage.setItem("userPass", valuePass);
  // const [visible, setVisible] = useState(payProductYoga);
  // const courses = [
  //   { _id: "ab1c3f", img: ProfCard1 },
  //   { _id: "t4si4o", img: ProfCard2 },
  //   { _id: "3bu6y5", img: ProfCard5 },
  // ];
  const emailPath = login.replace(/\./g, "-");
  useQueryUsersCourseDatabase(emailPath);
  const courses = useSelector((state) => state.userData.user_courses);
  // const [selectedCourse, setSelectedCourse] = useState("");

  const toggleTraining = (course) => {
    // setSelectedCourse(course);
    localStorage.setItem("selectedCourse", course);

    if (SelectWorkout) {
      setSelectWorkout(false);
    } else {
      setSelectWorkout(true);
    }
    
  };
  console.log(error)
  return (
    <S.ContainerDiv>
      {SelectWorkout === true ? (
        <SelectWorkoutWindow
          active={SelectWorkout}
          setActive={setSelectWorkout}
          refURL={`courses/${localStorage.getItem("selectedCourse")}`}
        />
      ) : null}
      <S.ContentDiv>     
        <UserHeader />
        <S.SubTitleDiv>
          <S.TitleTextSpan>Мой профиль</S.TitleTextSpan>
          <S.TitleTextSpanLogin>
            Логин:<S.SpanText>{valueMail}</S.SpanText>{" "}
          </S.TitleTextSpanLogin>   
          {error ? (
          <S.ErrorSpan>{error.status}</S.ErrorSpan>
          ):(
            isLoading            
          )
          }        
          {edit ? (
            <div>
              <S.UserLoginInput
                onChange={(e) =>
                  setValueMail(e.target.value) >
                  localStorage.setItem("userMail", valueMail)
                }
                value={valueMail}              
              />              
              <S.LoginButton onClick={() => changeEmail() > setEdit(false)}>
                Сохранить
              </S.LoginButton>

            </div>
          ) : null}
          <S.TitleTextSpanPass>
            Пароль:<S.SpanText>{valuePass}</S.SpanText>{" "}
          </S.TitleTextSpanPass>
          {editPass ? (
            <div>
              <S.UserLoginInput
                onChange={(e) =>
                  setValuePass(e.target.value) >
                  localStorage.setItem("userPass", valuePass)
                }
                value={valuePass}
              />
              <S.LoginButton onClick={() => changePass() > setEditPass(false)}>
                Сохранить
              </S.LoginButton>
            </div>
          ) : null}
        </S.SubTitleDiv>
        <S.ChangeLogPassDiv>
          <S.LogButton onClick={() => setEdit(true) > Tokens}>
            Редактировать логин
          </S.LogButton>

          <S.PassButton onClick={() => setEditPass(true) > Tokens}>
            Редактировать пароль
          </S.PassButton>
        </S.ChangeLogPassDiv>
        <S.TitleCourseSpan>Мои курсы</S.TitleCourseSpan>
        {courses ? (
          <S.SportChoiceDiv>
            {Object.entries(courses).map((item) => (
              <li key={item[0]}>
                <S.SportDiv>
                  <S.ProfCardImg
                    src={require(`../../img/${item[1].img}`)}
                    alt="prof_card"
                  />
                  <S.SportButton
                    // refURL={`courses/${item._id}`}
                    onClick={() => toggleTraining(item[0])}
                  >
                    Перейти →
                  </S.SportButton>
                </S.SportDiv>
              </li>
            ))}
          </S.SportChoiceDiv>
        ) : (
          <div>
            <S.textNoPay>У вас ещё не куплено ни одного курса</S.textNoPay>
            <Link to="/">
              <S.buttonNextPay>Купить...</S.buttonNextPay>
            </Link>
          </div>
        )}
      </S.ContentDiv>
    </S.ContainerDiv>
  );
}
