import { Link } from "react-router-dom";
import { sizes } from "src/utils/styles";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  text-align: left;
  border-radius: 0;

  & > svg {
    margin-right: 0.3rem;
  }

  font-size: 1.3rem;
  font-weight: bold;

  color: #ecf0f1;
  text-decoration: none;

  &:hover {
    color: #bdc3c7;
  }
`;

export const ItemsContainer = styled.div`
  display: none; // Hidden by default
  gap: 1rem;

  @media (min-width: ${sizes.screenMobileMaxWidth}px) {
    // Becomes visible on larger screens
    display: flex;
  }
`;

export const ButtonItem = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: #ecf0f1;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #bdc3c7;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  color: #ecf0f1;

  z-index: 999;

  @media (min-width: ${sizes.screenMobileMaxWidth}px) {
    display: none;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #2c3e50;
  border: 1px solid #34495e;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const DropdownButtonItem = styled(ButtonItem)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  text-align: left;
  border-radius: 0;

  & > svg {
    margin-right: 0.5rem;
  }
`;
