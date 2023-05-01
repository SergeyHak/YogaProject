import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  exerciseOne,
  exerciseTwo,
  exerciseThree,
} from "../../store/exerciseProgressSlice";
import { Button } from "../button/button";
import { Input } from "../input/input";

import * as S from "./styles";




export function PopupExercises({ setPopupActive, setPopupConfirmActive }) {

  const [inputValueOne, setInputValueOne] = useState();
  const [inputValueTwo, setInputValueTwo] = useState();
  const [inputValueThree, setInputValueThree] = useState();

  const dispatch = useDispatch();

  const onValueChangeOne = (e) => {
    setInputValueOne(Number(e.target.value));
  };
  const onValueChangeTwo = (e) => {
    setInputValueTwo(Number(e.target.value));
  };
  const onValueChangeThree = (e) => {
    setInputValueThree(Number(e.target.value));
  };

  const HandleClickChanges = () => {
    dispatch(exerciseOne(inputValueOne));
    dispatch(exerciseTwo(inputValueTwo));
    dispatch(exerciseThree(inputValueThree));

    setPopupConfirmActive(true);
    setPopupActive(false);
    const timer = setTimeout(() => {
      setPopupConfirmActive(false);
    }, 3000);
    return () => clearTimeout(timer);
  };
  return (

   
    <S.Container onClick={() => setPopupActive(false)}>

      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Мой прогресс</S.PopupTitle>
        <Input
          id="input"
          value={inputValueOne || ""}
          onChange={(e) => onValueChangeOne(e)}
          label="Сколько раз вы сделали наклоны вперед?"
        />
        <Input
          value={inputValueTwo || ""}
          onChange={(e) => onValueChangeTwo(e)}
          label="Сколько раз вы сделали наклоны назад?"
        />
        <Input
          value={inputValueThree || ""}
          onChange={(e) => onValueChangeThree(e)}
          label="Сколько раз вы сделали поднятие ног, согнутых в коленях?"
        />
        <Button
          btnName="Заполнить свой прогресс"
          onClick={HandleClickChanges}
        />
      </S.PopupContent>
    </S.Container>
  );
}
