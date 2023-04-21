import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f5f5f5;
`;

export const MeinBox = styled.div`
  width: 366px;
  height: 439px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  
`

export const Inputs = styled.input`
  width: 278.5px;
  height: 40px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 23px;
  outline: none;
  line-height: 24px;
  border: 1px solid #d0cece;
  border-top: transparent;
  border-left: transparent;
  border-right: transparent;
    ::placeholder {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #e1e1e1;
    }
`;

export const OstiumButton = styled.button`
  cursor: pointer;
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 6px;
  font-weight: 400;
  font-size: 18px;
  margin-top: 35px;
  line-height: 24px;
  color: #ffffff;
  :hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  width: 278px;
  height: 52px;
  left: 41px;
  top: 340px;
  border: 1px solid #d0cece;
  border-radius: 6px;

  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  :hover {
    background: #d0cece;
  }
  :active {
    background: #d9d9d9;
  }
`;