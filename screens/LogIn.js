import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/variables.js';
import LogUser from '../components/LogUser/LogUser.js';
import SectionTitle from '../components/shared/SectionTitle.js';
import ErrorBox from '../components/Error.js';

const LogIn = ({ navigation }) => {
  const [error, setError] = useState(false);
  const errorMessage = 'Feil epost adresse';

  const navigationHandlerHome = () => {
    navigation.navigate('Home');
  };

  const navigationHandlerSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ContentWrapper
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SectionTitle title="Logg deg inn" />
      <LogUserContainer>
        <LogUser
          navigationHandlerHome={navigationHandlerHome}
          errorHandler={setError}
          error={error}
        />
        <NyProfilContainer onPress={navigationHandlerSignUp}>
          <NyProfilText>Er du ny her? Oprett profil.</NyProfilText>
        </NyProfilContainer>
        {error ? <ErrorBox>{errorMessage}</ErrorBox> : null}
      </LogUserContainer>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.ScrollView`
  padding: 0 15px 0 15px;
  flex: 1;
  width: 100%;
  background-color: ${colors.paleWhite};
`;

const LogUserContainer = styled.View`
  width: 100%;
  flex: 1;
  border-radius: 10px;
  margin-top: 7.5px;
  background-color: ${colors.lightGreen};
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.lightGrey};
`;
const NyProfilContainer = styled.Pressable`
  align-items: center;
  height: auto;
  padding: 5px;
  width: auto;
  margin-bottom: 20px;
  border-bottom-width: 3px;
  border-bottom-color: ${colors.shinyGreen};
`;

const NyProfilText = styled.Text`
  color: ${colors.darkGreen};
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 15px;
`;

export default LogIn;
