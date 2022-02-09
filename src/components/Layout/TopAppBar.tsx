import React, {useState} from "react";
import {
  HeaderInner,
  RightSide,
  Menu,
  MenuItem,
  LogoDesktop,
  StyledLayout,
  Button,
  LogoMob,
  NonStyledLink,
  LogoLink,
  Line,
  BurgerButton,
  MenuDropDown,
} from "./styles";
import LogoDesk from "./assets/image/logo.svg";
import LogoM from "./assets/image/logoMob.svg";
import {useHistory} from "react-router-dom";

export const TopAppBar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const history = useHistory();
  const setNewActivity = () => {
    setIsActive(!isActive);
  };
  const redirectHandler = (path: string) => () => {
    history.push(path);
    setIsActive(false);
  };
  return (
    <StyledLayout theme={{active: isActive}}>
      <MenuDropDown display={isActive}>
        <li>
          <MenuItem onClick={redirectHandler("/")}>Our Features</MenuItem>
        </li>
        <li onClick={redirectHandler("/partners")}>
          <MenuItem>For Partners</MenuItem>
        </li>
      </MenuDropDown>
      <HeaderInner>
        <LogoLink to={"/"}>
          {!isActive ? (
            <>
              <LogoDesktop src={LogoDesk} />
              <LogoMob src={LogoM} />
            </>
          ) : null}
        </LogoLink>
        <RightSide>
          <Menu>
            <MenuItem onClick={redirectHandler("/")}>Our Features</MenuItem>
            <MenuItem onClick={redirectHandler("/partners")}>For Partners</MenuItem>
          </Menu>
          <NonStyledLink href={"mailto:info@ventrickle.com?subject=sign up inquiry"}>
            <Button value={"Sign Up"} type={"button"} />
          </NonStyledLink>
        </RightSide>
        <BurgerButton onClick={setNewActivity}>
          <Line active={isActive}></Line>
        </BurgerButton>
      </HeaderInner>
    </StyledLayout>
  );
};
