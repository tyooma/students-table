import styled from "styled-components";

import { colors } from "../../consts/colors";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div``;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${colors.orange};
  }
`;

export const Button = styled.button`
  background-color: ${colors.orange};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.black};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
