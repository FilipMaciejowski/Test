import * as React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/variables';
/* import useNavigationHook from '../navigation/useNavigationHook'; */
import SectionTitle from '../components/shared/SectionTitle';
import LoginInput from '../components/LogUser/LoginInput';
import Home from '../screens/Home';

const SignUp = ({ navigation }) => {
  const directionHomeHandler = () => {
    navigation.navigate(Home);
  };

  return (
    <ContentWrapper
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SectionTitle title="Opprett ny profil" />
      <FormWrapper>
        <LoginInput
          label="Navn"
          placeholder="skriv inn navn"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Epost"
          placeholder="skriv inn epost"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Passord"
          placeholder="skriv inn epost"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Gjenta passord"
          placeholder="skriv inn epost"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Gatenavn"
          placeholder="skriv inn gatenavn"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Gatenummer"
          placeholder="skriv inn gatenummer"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="Postnummer"
          placeholder="skriv inn gatenummer"
          /* value={}
        changeValue={} */
        />
        <LoginInput
          label="By"
          placeholder="skriv inn by"
          /* value={}
        changeValue={} */
        />
        <LoginButtonContainer elevation={5}>
          <LoginButtonTextWrapper>
            <LoginButtonText>Registrer meg</LoginButtonText>
          </LoginButtonTextWrapper>
          <LoginButtonWrapper onPressIn={directionHomeHandler}>
            <LoginButton>➔</LoginButton>
          </LoginButtonWrapper>
        </LoginButtonContainer>
      </FormWrapper>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.ScrollView`
  padding: 0 15px 0 15px;
  flex: 1;
  width: 100%;
  background-color: ${colors.paleWhite};
`;

const FormWrapper = styled.View`
  padding: 15px 15px 0 15px;
  flex: 1;
  width: 100%;
  background-color: ${colors.lightGreen};
  margin: 7.5px 0 15px 0;
  border-radius: 10px;
  border: 1px solid ${colors.lightGrey};
  align-items: center;
`;

const LoginButtonContainer = styled.View`
  height: 45px;
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
export default SignUp;
