import { useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import * as S from "./styles";

export function PopupExercises() {
  const [inputValueOne, setInputValueOne] = useState();
  const onValueChange = (e) => {
    setInputValueOne(Number(e.target.value));
  };
  const HandleClickChanges = () => {};
  return (
    <S.Container>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Мой прогресс</S.PopupTitle>
        <Input
          value={inputValueOne}
          onChange={(e) => onValueChange(e)}
          label="Сколько раз вы сделали наклоны вперед?"
        />
        <Input label="Сколько раз вы сделали наклоны назад?" />
        <Input label="Сколько раз вы сделали поднятие ног, согнутых в коленях?" />
        <Button
          btnName="Заполнить свой прогресс"
          onClick={HandleClickChanges}
        />
      </S.PopupContent>
    </S.Container>
  );
}
