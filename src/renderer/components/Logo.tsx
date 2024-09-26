import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  rotation: number;
}

const StyledLogo = styled.img<{ $rotation: number }>`
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
  transition: transform 0.5s ease-in-out;
  transform: rotate(${(props) => props.$rotation}deg);
  filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.green});
  &:hover {
    transform: rotate(${(props) => props.$rotation + 360}deg);
  }
`;


const LogoImage = require('../../../assets/razer-logo.png');

export const Logo: React.FC<LogoProps> = ({ rotation }) => {
  return <StyledLogo src={LogoImage} alt="Razer Logo" $rotation={rotation} />;
};