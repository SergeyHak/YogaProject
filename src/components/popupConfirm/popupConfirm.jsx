import * as S from "./styles";
import progress from "../../img/progress.png";

export function PopupConfirm({ setPopupConfirmActive }) {
  return (
    <S.Container onClick={() => setPopupConfirmActive(false)}>
      <S.PopupContent onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>Ваш прогресс засчитан!</S.PopupTitle>
        <S.PopupImg src={progress} />
      </S.PopupContent>
    </S.Container>
  );
}
