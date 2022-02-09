export type TextBaseProps = {
  variant?: "primary" | "secondary";
  //typeComponent?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "primaryButton";
  marginBottomDesktop?: number;
  marginBottomMob?: number;
  weight?: "light" | "regular" | "semi-bold" | "bold" | "medium";
  textAlign?: "left" | "center" | "right";
  sizeDesktop?: number;
  fontStyle?: "italic";
  color?: string;
  sizeMob?: number;
  textTransform?: "capitalize";
  decoration?: "underline" | "none";
  case?: "uppercase" | "lowercase" | "capitalize";
  className?: string;
  lineHeightMob?: number;
  lineHeightDesktop?: number;
  letterSpacingDesktop?: number;
  letterSpacingMob?: number;
};

export type BaseComponentProps = {
  variant?: "primary" | "secondary";
  //typeComponent?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "primaryButton" | "secondaryButton";
  sizeDesktop?: number;
  sizeMob?: number;
  weight?: "light" | "regular" | "semi-bold" | "bold" | "medium";
};
