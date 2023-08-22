import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input<{
  error?: boolean;
}>`
  width: 100%;

  font-weight: 300;
  height: 30px;

  padding-left: 8px;

  background-color: #fff;
  border: 2px solid ${({ error }) => (error ? "#F87171" : "#D1D5DB")};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: ${({ error }) => (error ? "#F87171" : "#000")};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const InputLabel = styled.label<{
  error?: boolean;
}>`
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 0.8rem;
  transform: translateY(0);
  transition: all 0.15s ease;
  color: ${({ error }) => (error ? "#F87171" : "#9CA3AF")};
  z-index: 10;
  pointer-events: none;

  ${StyledInput}:focus + & {
    transform: translateY(-16px) scale(0.75);
  }
`;
