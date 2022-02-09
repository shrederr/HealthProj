import React from "react";
import {CardWrapper, Card, ImageWrapper, TextWrapper} from "./styles";
import {FadeUp} from "../../helpers/Animations/styles";

interface IProps {
  data: Array<{
    cardImg: string;
    description: string;
  }>;
}

export const FitnessCards: React.FC<IProps> = ({data}) => {
  return (
    <CardWrapper>
      {data.map((el, indx) => (
        <FadeUp key={indx}>
          <Card>
            <ImageWrapper>
              <img src={el.cardImg} />
            </ImageWrapper>
            <TextWrapper>{el.description}</TextWrapper>
          </Card>
        </FadeUp>
      ))}
    </CardWrapper>
  );
};
