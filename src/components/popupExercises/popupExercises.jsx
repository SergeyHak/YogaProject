import { useState } from "react";
import { useDispatch } from "react-redux";
import { exerciseCount } from "../../store/exerciseProgressSlice";
import { Button } from "../button/button";
import { Input } from "../input/input";

import * as S from "./styles";

export function PopupExercises({
  setPopupActive,
  setPopupConfirmActive,
  label,
}) {
  const [inputValues, setInputValues] = useState(["", "", "", ""]);
  inputValues.splice(label.length);
  const dispatch = useDispatch();

  const onValueChange = (val, index) => {
    let temp = inputValues;
    temp[index] = val.target.value;
    setInputValues(temp);
  };

  const HandleClickChanges = () => {
    dispatch(exerciseCount(inputValues));

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
            label={label[index].split("(")[0] || ""}
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
