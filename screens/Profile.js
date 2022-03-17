import * as React from 'react';
import { colors } from '../styles/variables.js';
import styled from 'styled-components/native';
import SectionTitle from '../components/shared/SectionTitle';
import ProfileInfo from '../components/ProfileInfo';

const Profile = () => {
  return (
    <ContentContainer>
      <SectionTitle title="Profil" />
      <ProfileInfo />
    </ContentContainer>
  );
};

const ContentContainer = styled.View`
  flex: 1;
  padding: 0 15px 15px 15px;
  background-color: ${colors.paleWhite};
`;

export default Profile;
