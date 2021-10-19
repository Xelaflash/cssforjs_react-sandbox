import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

// we create an object with css var and we pass it as var of style attr
const SIZES = {
  small: {
    '--fontSize': 16 / 16 + 'rem',
    '--borderRadius': '2px',
    '--padding': '0.5rem 1rem',
  },
  medium: {
    '--fontSize': 18 / 16 + 'rem',
    '--borderRadius': '2px',
    '--padding': '1rem 1.5rem',
  },
  large: {
    '--fontSize': 21 / 16 + 'rem',
    '--borderRadius': '4px',
    '--padding': '1.25rem 2.25rem',
  }
}

// here we define our Base btn style
const ButtonBase = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  /* transparent border in order to have same btn sizes all the time */
  border: 2px solid transparent;
&:focus {
  outline-color: ${COLORS.primary};
  outline-offset: 5px;
}
`;

// we use the composing feature of styled components for the btn differences
const FillButton = styled(ButtonBase)`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background: transparent;
  color: ${COLORS.gray};
  &:focus {
    outline-color: ${COLORS.gray};
  }
  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else {
    Component = GhostButton;
  }


  return (
    <Component style={styles}>
      {children}
    </Component>
  );
};

export default Button;
