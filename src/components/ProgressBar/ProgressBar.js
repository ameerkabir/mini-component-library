/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const OUTER_BOX_SIZES = {
  small: {
    '--width': '370px',
    '--height': '8px',
  },

  medium: {
    '--width': '370px',
    '--height': '12px',
  },

  large: {
    '--width': '370px',
    '--height': '24px',
    '--padding': '4px',
  },
};

const INNER_BOX_SIZES = {
  small: {
    '--height': '8px',
  },
  medium: {
    '--height': '12px',
  },
  large: {
    '--height': '16px',
  },
};
const ProgressBar = ({ value, innerBarSize, size }) => {
  const outerBoxStyles = OUTER_BOX_SIZES[size];
  let innerBoxStyles = INNER_BOX_SIZES[innerBarSize];

  if (value === 100) {
    innerBoxStyles = {
      ...innerBoxStyles,
      '--borderTopRightRadius': '4px',
      '--borderBottomRightRadius': '4px',
    };
  }

  return (
    <ProgressWrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={outerBoxStyles}
    >
      <Bar style={innerBoxStyles} value={value} />
      <VisuallyHidden>{value}</VisuallyHidden>
    </ProgressWrapper>
  );
};
const ProgressWrapper = styled.div`
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: ${(props) => `${props.value}%`};
  height: var(--height);
  background-color: blue;
  border-radius: 4px;
  border-top-right-radius: var(--borderTopRightRadius);
  border-bottom-right-radius: var(--borderBottomRightRadius);
`;

export default ProgressBar;
