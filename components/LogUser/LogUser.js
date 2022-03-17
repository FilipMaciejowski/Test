import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles/variables.js';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import LoginInput from './LoginInput';

const LogUser = ({ errorHandler, navigationHandlerHome }) => {
  const [isSelected, setSelection] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const EmailValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(userEmail) === false) {
      errorHandler(true);
    } else {
      errorHandler(false);
    }
  };

  const inputValidationHandler = () => {
    EmailValidation();
    if (userEmail) {
      navigationHandlerHome();
    }
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <LogUserWrapper>
      <LoginInput
        label="Login:"
        placeholder="skriv inn epost adresse"
        value={userEmail}
        changeValue={setUserEmail}
      />
      <LoginInput
        label="Passord:"
        placeholder="skriv inn passord"
        value={userPassword}
        changeValue={setUserPassword}
      />
      <CheckboxContainer>
        <BouncyCheckbox
          size={25}
          onPress={setSelection}
          fillColor={colors.darkGreen}
        />
        <CheckboxText>Husk meg</CheckboxText>
      </CheckboxContainer>
      <LoginButtonContainer elevation={5}>
        <LoginButtonTextWrapper>
          <LoginButtonText>Logg inn</LoginButtonText>
        </LoginButtonTextWrapper>
        <LoginButtonWrapper onPress={inputValidationHandler}>
          <LoginButton>➔</LoginButton>
        </LoginButtonWrapper>
      </LoginButtonContainer>
    </LogUserWrapper>
  );
};

const LogUserWrapper = styled.View`
  padding: 10px 0 10px 0;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  align-items: center;
  justify-content: flex-start;
  width: 325px;
`;

const CheckboxText = styled.Text`
  font-size: 14px;
  color: ${colors.darkGreen};
  font-weight: 600;
`;

const LoginButtonContainer = styled.View`
  height: 12.5%;
  width: 325px;
  padding: 0;
  margin: 15px 0 25px 0;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.shinyGreen};
`;

const LoginButtonTextWrapper = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${colors.shinyGreen};
`;

const LoginButtonText = styled.Text`
  color: ${colors.white};
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
`;

const LoginButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkGreen};
`;

const LoginButton = styled.Text`
  color: ${colors.shinyGreen};
  padding: 5px;
  font-size: 22px;
  justify-content: center;
  align-items: center;
`;

export default LogUser;
