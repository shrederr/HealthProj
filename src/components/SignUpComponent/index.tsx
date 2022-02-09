import React from "react";
import {Container, ContainerText, SignUpButton} from "./styles";

interface IProps {
  mobDisappear?: boolean;
}

export const SingUpComponent: React.FC<IProps> = ({mobDisappear = false}) => {
  return (
    <Container theme={{disappear: mobDisappear}}>
      <ContainerText>Assemble your team. Try us for free.</ContainerText>
      <SignUpButton type="button" value="Sign Up Now" />
    </Container>
  );
};
