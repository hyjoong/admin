import useOutsideClick from "@hooks/useOutsideClick";
import DownArrow from "@components/DropDown/DownArrow";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";

interface Props {
  selectOption: string;
  menuList: string[];
  setItemSelect: Dispatch<SetStateAction<string>>;
}

const DropDown = ({ selectOption, menuList, setItemSelect }: Props) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleClose = () => {
    setIsMenu(false);
  };

  const dorwpDownRef = useOutsideClick(handleClose);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectValue = e.currentTarget.dataset.value;
    setItemSelect(selectValue && selectValue);
    setIsMenu(false);
  };

  return (
    <DropDownContainer ref={dorwpDownRef}>
      <DropDownBox onClick={handleMenu}>
        {selectOption}
        <ArrowIcon isMenu={isMenu}>
          <DownArrow />
        </ArrowIcon>
      </DropDownBox>
      <OptionList>
        {isMenu &&
          menuList.map((item, index) => (
            <Option key={index}>
              <button data-value={item} onClick={(e) => handleClick(e)}>
                {item}
              </button>
            </Option>
          ))}
      </OptionList>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const DropDownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  width: 90px;
  height: 20px;
  border: 1px solid #d1d8dc;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
`;

const ArrowIcon = styled.div<{ isMenu: boolean }>`
  transition: transform 0.3s;
  ${({ isMenu }) =>
    isMenu &&
    css`
      transform: rotate(-180deg);
      transition: transform 0.3s;
    `}
`;

const OptionList = styled.ul`
  position: absolute;
  top: 45px;
  border-radius: 10px;
  border: 1px solid #d1d8dc;
  transition: all 0.2s ease-out;
  background: #ffffff;
  z-index: 2;
`;

const Option = styled.li`
  padding: 10px 15px;
  width: 90px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #d1d8dc;
  }
  button {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
  }
`;

export default DropDown;
