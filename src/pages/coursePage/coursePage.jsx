import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDataBase } from "../../services/firebaseApi";
import { useDispatch } from "react-redux";
import { setPay } from "../../store/payProductSlice";
import { useAuth } from "../../store/hooks/use-auth";

import * as S from "./styles";

import logo from "../../img/logoBlack.png";
import LikesImg1 from "../../img/likes1.png";
import LikesImg2 from "../../img/likes2.png";
import LikesImg3 from "../../img/likes3.png";
import Handset from "../../img/handset.png";
import backgroundProf1Url from "../../img/background_prof_1.png";
import { mutationUsersCourseDatabase } from "../../services/mutationFirebaseUsersApi";

export default function CoursePage({ refURL }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAuth();
  const id = useSelector((state) => state.courses.id);
  const img = useSelector((state) => state.courses.img);
  
  const payCourse = () => {
    if (isAuth === false) {
      navigate("/login", { replace: true });
    } else {
      const askPay = window.confirm("Вы хотите купить данный курс?");
      // console.log(askPay);
      if (askPay) {
        dispatch(
          setPay({
            yoga: true,
          })
        );
        mutationUsersCourseDatabase(localStorage.getItem("login"), id, img);
        navigate("/profile", { replace: true });
      }
    }
  };

  useDataBase(refURL);
  const name = useSelector((state) => state.courses.name);
  const description = useSelector((state) => state.courses.description);
  const fit = useSelector((state) => state.courses.fit);
  const directions = useSelector((state) => state.courses.directions);

  return (
    <S.Container>
      <S.ContentBlock>
        <S.TitleBlock>
          <Link to="/">
            <S.LogoImg src={logo} alt="logo" />
          </Link>
          <Link to="/login">
            <S.EnterButton>Войти</S.EnterButton>
          </Link>
        </S.TitleBlock>
        <S.HeadContentBlock
          style={{ backgroundImage: `url(${backgroundProf1Url})` }}
        >
          <S.SubTitleBlock>
            <S.TitleText>{name}</S.TitleText>
            <S.ButtonPay onClick={payCourse}>Купить курс</S.ButtonPay>
          </S.SubTitleBlock>
        </S.HeadContentBlock>
        <S.TitleLikeText>Подойдет для вас, если:</S.TitleLikeText>
        <S.LikesBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg1} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>{fit[0]}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg2} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>{fit[1]}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
          <S.LikesSubBlock>
            <S.LikesImg src={LikesImg3} alt="Likes number" />
            <S.LikesTextBlock>
              <S.LikesText>{fit[2]}</S.LikesText>
            </S.LikesTextBlock>
          </S.LikesSubBlock>
        </S.LikesBlock>

        <S.TitleDirectionsText>Направления:</S.TitleDirectionsText>

        <S.DirectionsBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              {directions[0] && (
                <S.DirectionsListLi>{directions[0]}</S.DirectionsListLi>
              )}
              {directions[1] && (
                <S.DirectionsListLi>{directions[1]}</S.DirectionsListLi>
              )}
              {directions[2] && (
                <S.DirectionsListLi>{directions[2]}</S.DirectionsListLi>
              )}
            </S.DirectionsList>
          </S.DirectionsSubBlock>
          <S.DirectionsSubBlock>
            <S.DirectionsList>
              {directions[3] && (
                <S.DirectionsListLi>{directions[3]}</S.DirectionsListLi>
              )}
              {directions[4] && (
                <S.DirectionsListLi>{directions[4]}</S.DirectionsListLi>
              )}
              {directions[5] && (
                <S.DirectionsListLi>{directions[5]}</S.DirectionsListLi>
              )}
            </S.DirectionsList>
          </S.DirectionsSubBlock>
        </S.DirectionsBlock>

        <S.InfoBlock>
          <S.InfoText>{description}</S.InfoText>
        </S.InfoBlock>

        <S.FooterContentBlock>
          <S.FooterSubBlock>
            <S.FooterTextBlock>
              <S.FooterText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем
                с выбором направления и тренера, с которым тренировки принесут
                здоровье и радость!
              </S.FooterText>
            </S.FooterTextBlock>
            <S.SignUpTrainingButton>
              Записаться на тренировку
            </S.SignUpTrainingButton>
          </S.FooterSubBlock>
          <S.HandsetImg src={Handset} alt="Handset" />
        </S.FooterContentBlock>
      </S.ContentBlock>
    </S.Container>
  );
}
