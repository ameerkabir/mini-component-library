import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Sizes = {
  small: {
    size: 16,
    "--top": 5 + "px",
  },
  large: {
    size: 24,
    "--top": 0,
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { size: iconSize, ...styles } = Sizes[size];
  console.log({ iconSize, styles });
  return (
    <Wrapper>
      <InputWrapper style={{ "--width": width + "px" }}>
        <IconWrapper style={styles}>
          <Icon size={iconSize} id={icon} />
        </IconWrapper>
        <NativeInput type="text" placeholder={placeholder} />
      </InputWrapper>
    </Wrapper>
  );
};

const InputWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.gray700};
  position: relative;
  text-wrap: wrap;
  width: var(--width);
`;

const Wrapper = styled.div`
  width: 271px;
  height: 0px;

  &:focus & {
    border: 3px solid red;
    background: red;
  }
`;

const NativeInput = styled.input`
  -webkit-appearance: none;
  outline: none;
  border: none;
  font-size: 20px;
  margin-left: 24px;
  width: 100%;

  ::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: ${COLORS.gray500};
  }

  &:focus  {
    border: 3px solid red;
    background: red;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: var(--top);
  bottom: 0;
  left: 0;
  margin-right: 20px;
`;

const Label = styled.label`
  margin-right: 12px;
`;

export default IconInput;
