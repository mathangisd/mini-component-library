/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {

  small: {
    "--height": 8 +"px",
  },
  medium: {
    "--height": 12 +"px"
  },
  large: {
    "--height": 16 +"px"
  }
}

const ProgressBar = ({ value, size }) => {
  
  let Component;

  const innerBarStyles = SIZES[size];
  if (size === "small"){
    Component = ProgressWrapperSmall;

  } else if (size === "medium") {

    Component = ProgressWrapperMedium;

  } else if (size === "large") {

    Component = ProgressWrapperLarge;

  } else {
    throw new Error(`Unrecognized size ${size}`);
  }
  return <Component>
    <ProgressValue 
    style={innerBarStyles} 
    value={value}  
    role="progressbar" 
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="loadinglabel">
    </ProgressValue>
  </Component>;
};


const ProgressWrapperBase = styled.div`
  width: 370px;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`
const ProgressWrapperSmall = styled(ProgressWrapperBase)`

  height: 8px;

`;
const ProgressWrapperMedium = styled(ProgressWrapperBase)`

  height: 12px;

`;
const ProgressWrapperLarge = styled(ProgressWrapperBase)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;


const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  width: ${({ value }) => value}%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: var(--height);
  border-top-right-radius: ${props => props.value > 99 ? '4px' : 0} ;
  border-bottom-right-radius: ${props => props.value > 99 ? '4px' : 0} ;
`;


export default ProgressBar;
