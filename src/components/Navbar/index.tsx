import { useRef, useState } from "react";
import { MdAdd, MdList, MdMap, MdMenu } from "react-icons/md";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import {
  Brand,
  ButtonItem,
  DropdownButtonItem,
  DropdownContainer,
  DropdownMenu,
  ItemsContainer,
  StyledNavbar,
} from "./styles";

type Props = {
  onAddClick: () => void;
  onListClick: () => void;
};

const Navbar = ({ onAddClick, onListClick }: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside([dropdownRef], () => setDropdownVisible(false));

  return (
    <StyledNavbar>
      <Brand to="/">
        <MdMap fontSize={20} /> AERIT
      </Brand>
      <ItemsContainer className="desktop">
        <ButtonItem onClick={onListClick}>List</ButtonItem>
        <ButtonItem onClick={onAddClick}>Add</ButtonItem>
      </ItemsContainer>
      <DropdownContainer ref={dropdownRef} className="mobile">
        <MdMenu
          fontSize={24}
          onClick={() => setDropdownVisible(!isDropdownVisible)}
        />
        {isDropdownVisible && (
          <DropdownMenu>
            <DropdownButtonItem onClick={onListClick}>
              <MdList fontSize={20} /> List
            </DropdownButtonItem>
            <DropdownButtonItem onClick={onAddClick}>
              <MdAdd fontSize={20} /> Add
            </DropdownButtonItem>
          </DropdownMenu>
        )}
      </DropdownContainer>
    </StyledNavbar>
  );
};

export default Navbar;
