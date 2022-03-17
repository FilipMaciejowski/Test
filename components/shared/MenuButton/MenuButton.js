import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../styles/variables';
import HamburgerIcon from './HamburgerIcon';

const MenuButton = () => {
  return (
    <ButtonContainer>
      <HamburgerIcon />
      <ButtonText>Meny</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.View`
  padding: 2.5px;
  width: 85px;
  height: 40px;
  border-radius: 12.5px;
  background-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${colors.darkGreen};
`;

const ButtonText = styled.Text`
  color: ${colors.mainGrey};
  font-size: 14px;
`;

export default MenuButton;
