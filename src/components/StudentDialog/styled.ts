import styled from "styled-components";

import { colors } from "../../consts/colors";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
  max-width: 500px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 240px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const CloseButton = styled.button`
  background-color: ${colors.orange};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: ${colors.black};
  }
`;

export const MarksList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MarkItem = styled.li`
  font-size: 1rem;
  margin: 5px 0;

  strong {
    font-weight: bold;
  }
`;
