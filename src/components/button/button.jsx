import * as S from "./styles";

export function Button(props) {
  return (
    <S.Button type="submit" onClick={props.onClick}>
      {props.btnName}
    </S.Button>
  );
}
