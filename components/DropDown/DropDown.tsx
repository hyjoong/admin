import useOutsideClick from "@hooks/useOutsideClick";
import DownArrow from "@components/DropDown/DownArrow";
import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import { CategoryToEnglish, periodToEnglish } from "@utils/transferLang";

interface Props {
  selectOption: string;
  exceptOption?: string;
  menuList: string[];
  order?: number;
  setItemSelect: Dispatch<SetStateAction<string>>;
}

const DropDown = ({
  selectOption,
  exceptOption,
  menuList,
  order,
  setItemSelect,
}: Props) => {
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
    menuList.length === 2
      ? setItemSelect(periodToEnglish[selectValue])
      : setItemSelect(CategoryToEnglish[selectValue]);
    setIsMenu(false);
  };

  return (
    <DropDownContainer ref={dorwpDownRef}>
      <DropDownBox onClick={handleMenu} order={order}>
        {selectOption}
        <ArrowIcon isMenu={isMenu}>
          <DownArrow />
        </ArrowIcon>
      </DropDownBox>
      <OptionList>
        {isMenu &&
          menuList.map(
            (item, index) =>
              item !== exceptOption && (
                <Option key={index}>
                  <button data-value={item} onClick={(e) => handleClick(e)}>
                    {item}
                  </button>
                </Option>
              )
          )}
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

const DropDownBox = styled.div<{ order: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 35px;
  width: 60px;
  height: 20px;
  border: 1px solid #d1d8dc;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;

  ::before {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 20px;
    content: "";
    border-radius: 50%;

    ${({ order }) =>
      order &&
      (order === 1
        ? css`
            background-color: #4fadf7;
          `
        : css`
            background-color: #85da47;
          `)};
  }
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

  button {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #d1d8dc;
  }
`;

export default DropDown;
