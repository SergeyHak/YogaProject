import * as S from "./styles";

export function Input(props) {
  return (
    <S.InputContainer>
      <S.InputLabel>{props.label}</S.InputLabel>
      <S.Input
        type="number"
        value={props.value}
        placeholder="Введите значение"
        onChange={props.onChange}
      ></S.Input>
      <S.InputLine />
    </S.InputContainer>
  );
}
