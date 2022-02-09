import styled from "styled-components";

export const BasicContainer = styled.div`
  position: relative;
  background-color: #0e1018;

  background-position: top center;
  background-size: cover;
`;

export const BackGroundTopDesktop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 1410px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const BackGroundTopMob = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`;

export const EllipseLeft = styled.img`
  position: absolute;
  top: ${(props) => props.theme.top || "0"};
  left: ${(props) => props.theme.left || "0"};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const EllipseRight = styled.img`
  position: absolute;
  top: ${(props) => props.theme.top || "0"};
  right: ${(props) => props.theme.right || "0"};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const EllipseLeftMob = styled.img`
  display: none;
  position: absolute;
  top: ${(props) => props.theme.top || "0"};
  left: ${(props) => props.theme.left || "0"};
  @media (max-width: 600px) {
    display: block;
  }
`;

export const EllipseRightMob = styled.img`
  display: none;
  position: absolute;
  top: ${(props) => props.theme.top || "0"};
  right: ${(props) => props.theme.right || "0"};
  @media (max-width: 600px) {
    display: block;
  }
`;
