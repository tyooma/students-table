import styled from "styled-components";

import { colors } from "../../consts/colors";
import { OverlayProps } from "../../interfaces/interfaces";

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Header = styled.h1`
  margin-top: 100px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHead = styled.thead``;

export const Tr = styled.tr``;

export const TableBody = styled.tbody``;

export const Th = styled.th`
  background-color: ${colors.orange};
  border: 1px solid ${colors.grey};
  padding: 8px;
  text-align: center;
  color: ${colors.black};
`;

export const Td = styled.td`
  border: 1px solid ${colors.grey};
  padding: 8px;
`;
