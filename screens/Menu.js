import * as React from 'react';
import { colors } from '../styles/variables.js';
import styled from 'styled-components/native';

const Menu = ({ navigation }) => {
  return (
    <MenuContainer>
      <TextWrapper>
        <MenuTitle>Meny</MenuTitle>
      </TextWrapper>
    </MenuContainer>
  );
};
const MenuContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`;

const TextWrapper = styled.View`
  height: auto;
`;

const MenuTitle = styled.Text`
  color: ${colors.mainGrey};
  font-size: 20px;
  font-weight: 600;
`;

export default Menu;
