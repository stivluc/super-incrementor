import React from 'react';
import styled from 'styled-components';

interface ControlsProps {
  increment: number;
  onIncrementChange: (value: number) => void;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  color: ${(props) => props.theme.colors.black};
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SmallButton = styled(Button)`
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 60px;
  padding: 0.5rem;
  margin: 0.5rem;
  text-align: center;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.green};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  min-width: 60px;
`;

export const Controls: React.FC<ControlsProps> = ({
  increment,
  onIncrementChange,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <>
      <div>
        <Button onClick={onDecrement}>−</Button>
        <Input
          type="number"
          min="1"
          value={increment}
          onChange={(e) => onIncrementChange(Math.max(1, Number(e.target.value)))}
        />
        <Button onClick={onIncrement}>+</Button>
      </div>
      <SmallButton onClick={onReset}>Reset</SmallButton>
    </>
  );
};