import styled from "styled-components";

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header = styled.div<HeaderProps>`
  position: relative;
`;

export const Main = styled.main`
  margin-left: auto;
  margin-right: auto;

  height: 100%;
`;
