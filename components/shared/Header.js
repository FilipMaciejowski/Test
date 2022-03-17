import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { colors } from '../../styles/variables';
import BackIcon from '../../assets/Back.svg';
import MenuButton from './MenuButton/MenuButton';

const Header = ({ name, back, navigation }) => {
  const iOS = Platform.OS;
  const navigateBackHandler = () => {
    navigation.goBack();
  };
  return (
    <HeaderContainer platform={iOS}>
      {back ? (
        <BackButtonWrapper onPressIn={navigateBackHandler}>
          <BackIcon />
        </BackButtonWrapper>
      ) : (
        <WelcomeText>Hei{name}!</WelcomeText>
      )}
      <MenuButton />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${props =>
    props.platform === 'android' ? '20px 25px 0px 25px' : '35px 25px 0px 25px'};
  background-color: ${colors.lightGreen};
  height: ${props => (props.platform === 'android' ? '100px' : '115px')};
  width: 100%;
  border-bottom-color: ${colors.lightGrey};
  border-bottom-width: 1px;
`;

const WelcomeText = styled.Text`
  color: ${colors.mainGrey};
  font-size: 20px;
  font-weight: 600;
`;

const BackButtonWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export default Header;
