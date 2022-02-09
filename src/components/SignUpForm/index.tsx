import React from "react";
import {
  FormWrapper,
  FormRightSide,
  FormText,
  Line,
  FormInputWrapper,
  FormInput,
  FormLeftContainer,
  FormContainer,
  Icon,
  Link,
  FormButton,
} from "./styles";
import {ReactComponent as Email} from "./assets/icons/email.svg";
import {ReactComponent as Name} from "./assets/icons/name.svg";

interface IProps {
  text: string;
  link?: boolean;
  linkValue?: string;
}

export const SignUpForm: React.FC<IProps> = ({text, link = false, linkValue}) => {
  return (
    <FormWrapper>
      <FormContainer>
        <FormLeftContainer>
          <FormInputWrapper>
            <Icon>
              <Name />
            </Icon>
            <FormInput type={"text"} placeholder={"Enter your name"} />
          </FormInputWrapper>
          <FormInputWrapper>
            <Icon>
              <Email />
            </Icon>
            <FormInput type={"text"} placeholder={"Enter your email"} />
          </FormInputWrapper>
          {link ? (
            <Link href={linkValue}>
              <FormButton type={"button"} value={"Sign Up"} />
            </Link>
          ) : (
            <FormButton type={"button"} value={"Sign Up"} />
          )}
        </FormLeftContainer>
        <FormRightSide>
          <Line />
          <FormText>{text}</FormText>
        </FormRightSide>
      </FormContainer>
    </FormWrapper>
  );
};
