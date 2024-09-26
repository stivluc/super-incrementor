import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { theme } from './theme';
import { Logo } from './components/Logo';
import { ValueDisplay } from './components/ValueDisplay';
import { Title } from './components/Title';
import { Controls } from './components/Controls';

declare global {
  interface Window {
    backend: {
      incrementValue: () => void;
      getValue: () => number;
    };
  }
}

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    font-family: Arial, sans-serif;
  }
`;

// Container for centering the box
const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

// Animation for box entrance
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  box-shadow: 0 0 20px ${(props) => props.theme.colors.green};
`;

export const App = () => {
  const [backendValue, setBackendValue] = useState<number>(0);
  const [valueOffset, setValueOffset] = useState<number>(0);
  const [increment, setIncrement] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  useEffect(() => {
    if (window.backend) {
      const currentValue = window.backend.getValue();
      setBackendValue(currentValue);
    } else {
      console.error('window.backend is undefined');
    }
  }, []);

  const handleIncrement = () => {
    if (window.backend) {
      for (let i = 0; i < increment; i++) {
        window.backend.incrementValue();
      }
      const newBackendValue = window.backend.getValue();
      setBackendValue(newBackendValue);
      setRotation((prev) => prev + increment * 120);
    }
  };

  const handleDecrement = () => {
    if (window.backend) {
      setValueOffset((prevOffset) => prevOffset + increment);
      setRotation((prev) => prev - increment * 120);
    }
  };

  const handleReset = () => {
    if (window.backend) {
      setValueOffset(backendValue);
      setRotation(0);
    }
  };

  const handleIncrementChange = (value: number) => {
    setIncrement(value);
  };

  const displayedValue = backendValue - valueOffset;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Box>
          <Logo rotation={rotation} />
          <Title />
          <ValueDisplay value={displayedValue} />
          <Controls
            increment={increment}
            onIncrementChange={handleIncrementChange}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
