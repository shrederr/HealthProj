import React from "react";
import {ListWrapper, ListTextWrapper, ListItem, ListMarker} from "./styles";
//import Arrow from "./assets/icons/arrow.png";
import LogoMarker from "./assets/icons/logoMarket.svg";

interface IProps {
  terms: string[];
  arrows?: boolean;
}

export const List: React.FC<IProps> = ({terms, arrows = false}) => {
  return (
    <ListWrapper>
      {terms.map((el, index) => (
        <ListItem key={index}>
          <ListMarker>
            {arrows ? (
              <img src={LogoMarker} alt={"right-arrow"} style={{width: "32px"}} /> //maybe add arrow here late
            ) : (
              <img src={LogoMarker} alt={"right-arrow"} style={{width: "32px"}} />
            )}
          </ListMarker>
          <ListTextWrapper>{el}</ListTextWrapper>
        </ListItem>
      ))}
    </ListWrapper>
  );
};
