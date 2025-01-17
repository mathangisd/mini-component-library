/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  }
}

const ProgressBar = ({ value, size }) => {
  
  const styles = STYLES[size];
  if(!styles) {
    throw new Error(`Unrecognized size passed to Progress Bar ${size}`);
  }

  return <ProgressWrapperBase
    role="progressbar" 
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="loadinglabel"
    style={{
        '--padding': styles.padding +'px',
        '--radius': styles.radius + 'px',
    }}
    >
    <VisuallyHidden>{value}%</VisuallyHidden>
    <ProgressValueWrapper>

      <ProgressValue 
        style = {{
          '--width' : value +'%',
          '--height': styles.height +'px',
        }}
      >
      </ProgressValue>
    </ProgressValueWrapper>
  </ProgressWrapperBase>;
};


const ProgressWrapperBase = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;


const ProgressValue = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;


const ProgressValueWrapper = styled.div`
  border-radius: 4px;
   /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;
export default ProgressBar;
