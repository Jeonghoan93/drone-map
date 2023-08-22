import { sizes } from "src/utils/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 25px 15px;
  border-radius: 10px;

  width: 100%;

  max-width: ${sizes.modalMaxWidth}px;
`;
