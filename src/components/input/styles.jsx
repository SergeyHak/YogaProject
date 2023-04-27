import styled from "styled-components";

export const InputContainer = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  margin-left: 41px;
`;

export const InputLabel = styled.div`
  height: 48px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 361px;
  height: 32px;
  &::placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    color: #d0cece;
  }
  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputLine = styled.span`
  display: inline-block;
  width: 361px;
  border: 1px solid #d0cece;
  margin-bottom: 38px;
`;
