import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ValueDisplayProps {
  value: number;
}

// Animation for value change
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.green};
  margin-bottom: 1rem;
  animation: ${pulse} 0.5s ease-in-out;
`;

export const ValueDisplay: React.FC<ValueDisplayProps> = ({ value }) => {
  return <StyledValue key={value}>{value}</StyledValue>;
};
