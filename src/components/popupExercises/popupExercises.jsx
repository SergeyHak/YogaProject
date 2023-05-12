import { useState } from "react";
import { mutationUsersWorkoutProgressDatabase } from "../../services/mutationFirebaseUsersApi";
import { Button } from "../button/button";
import { Input } from "../input/input";

import * as S from "./styles";

export function PopupExercises({
  setPopupActive,
  setPopupConfirmActive,
  label,
  workoutID,
}) {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  inputValues.splice(label.length);
  console.log(parseInt(label[0].match(/\d+/)), "max");

  const onValueChange = (val, index) => {
    let temp = inputValues;
    temp[index] = val.target.value;
    setInputValues(temp);
  };

  const HandleClickChanges = () => {
    mutationUsersWorkoutProgressDatabase(
      localStorage.getItem("login"),
      workoutID,
      inputValues
    );

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
        {inputValues.map((val, index) => (
          <Input
            type="number"
            label={label[index].split("(")[0] || ""}
            min="0"
            max={parseInt(label[index].match(/\d+/))}
            key={index}
            onChange={(val) => {
              onValueChange(val, index);
            }}
          />
        ))}
        <Button
          btnName="Заполнить свой прогресс"
          onClick={HandleClickChanges}
        />
      </S.PopupContent>
    </S.Container>
  );
}
