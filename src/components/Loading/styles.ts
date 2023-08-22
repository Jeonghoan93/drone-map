import styled, { keyframes } from "styled-components";

type DotProps = {
  delay?: number;
};

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
`;

export const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  animation: ${bounce} 1.2s infinite ease-in-out both;
  animation-delay: ${(props) => props.delay || 0}s;
`;

export const Logo = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 2em;
  color: black;
  margin-bottom: 10px;

  span {
    color: red;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Manrope", sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  color: grey;
  margin-bottom: 40px;
`;
