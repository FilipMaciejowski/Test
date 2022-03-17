import React from 'react';
import styled from 'styled-components/native';
import { colors, layout } from '../styles/variables';

const ProfileInfo = () => {
  return (
    <ProfileInfoContainer>
      <ProfileInfoContent>
        <ProfileInfoHeader>
          <Name>Filip Jakub Maciejowski</Name>
          <UserIdWrapper>
            <UserIdTitle>User-ID: </UserIdTitle>
            <UserIdNumber>46275467673246</UserIdNumber>
          </UserIdWrapper>
        </ProfileInfoHeader>
        <ProfileInfoMain>
          <Email>
            <EmailTitle>Epost: </EmailTitle>
            <EmailContent>filip@datek.no</EmailContent>
          </Email>
          <Address>
            <AdressTitle>Adresse:</AdressTitle>
            <AddressContent>Gjøkbakken 8B, 0789 Oslo</AddressContent>
          </Address>
        </ProfileInfoMain>
        <LogOutWrapper>
          <LogOut>Logg ut</LogOut>
        </LogOutWrapper>
      </ProfileInfoContent>
    </ProfileInfoContainer>
  );
};

const ProfileInfoContainer = styled.View`
  height: auto;
  width: 100%;
  background-color: ${colors.white};
  border-radius: 10px;
  border: 1px solid ${colors.lightGrey};
  margin-top: 10px;
`;
const ProfileInfoContent = styled.View`
  ${layout.center};
`;

const ProfileInfoHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightGrey};
  padding: 10px;
  width: 100%;
  ${layout.center}
`;

const Name = styled.Text`
  color: ${colors.mainGrey};
  font-size: 18px;
  font-weight: 600;
`;
const UserIdWrapper = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  ${layout.center};
`;

const UserIdTitle = styled.Text`
  color: ${colors.mainGrey};
  font-size: 14px;
  font-weight: 400;
  padding: 5px;
`;

const UserIdNumber = styled.Text`
  color: ${colors.mainGrey};
  font-size: 14px;
  padding: 5px;
  font-weight: 600;
`;
const ProfileInfoMain = styled.View`
  width: 100%;
  padding: 10px;
`;

const Email = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const EmailTitle = styled.Text`
  font-size: 15px;
`;
const EmailContent = styled.Text`
  color: ${colors.mainGrey};
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
`;
const Address = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const AdressTitle = styled.View`
  font-size: 15px;
`;
const AddressContent = styled.View`
  color: ${colors.mainGrey};
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
`;

const LogOutWrapper = styled.Pressable``;

const LogOut = styled.Text`
  color: ${colors.darkGreen};
  font-size: 20px;
  font-weight: 600;
  margin: 25px;
`;
export default ProfileInfo;
