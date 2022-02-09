import React from "react";
import {CardWrapper, Card, ImageWrapper, TextWrapper, Image} from "./styles";
import {FadeUp, FadeLeft, FadeRight} from "../../helpers/Animations/styles";

interface IProps {
  textWidth?: string;
  data: Array<{
    cardImg: string;
    description: string;
  }>;
}

export const PhotoCards: React.FC<IProps> = ({data, textWidth = "90%"}) => {
  return (
    <CardWrapper>
      {data.map((el, indx) =>
        indx === 0 ? (
          <FadeLeft key={indx}>
            <Card>
              <ImageWrapper>
                <Image src={el.cardImg} />
              </ImageWrapper>
              <TextWrapper theme={{width: textWidth}}>{el.description}</TextWrapper>
            </Card>
          </FadeLeft>
        ) : indx === 1 ? (
          <FadeUp key={indx}>
            <Card>
              <ImageWrapper>
                <Image src={el.cardImg} />
              </ImageWrapper>
              <TextWrapper theme={{width: textWidth}}>{el.description}</TextWrapper>
            </Card>
          </FadeUp>
        ) : (
          <FadeRight key={indx}>
            <Card>
              <ImageWrapper>
                <Image src={el.cardImg} />
              </ImageWrapper>
              <TextWrapper theme={{width: textWidth}}>{el.description}</TextWrapper>
            </Card>
          </FadeRight>
        ),
      )}
    </CardWrapper>
  );
};
