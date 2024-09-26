import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.green};
`;

export const Title: React.FC = () => {
  return <StyledTitle>SUPER INCREMENTOR</StyledTitle>;
};
