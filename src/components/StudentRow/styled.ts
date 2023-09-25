import styled from "styled-components";

import { colors } from "../../consts/colors";

export const Row = styled.tr`
  border: 1px solid ${colors.grey};
  background-color: ${colors.white};
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Cell = styled.td`
  padding: 10px;
  text-align: center;
`;
