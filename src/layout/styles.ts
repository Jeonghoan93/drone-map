import { sizes } from "src/utils/styles";
import styled from "styled-components";

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header = styled.div<HeaderProps>`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: #2c3e50;
`;

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${sizes.NavbarHeight}px;
  height: 100%;
`;
