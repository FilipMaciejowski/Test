import * as React from 'react';
import { colors } from '../styles/variables.js';
import styled from 'styled-components/native';
import OpenContainer from '../components/OpenContainer';
import OpenContainerButton from '../components/OpenContainerButton';

const UnlockContainer = () => {
  return (
    <ContentWrapper>
      <OpenContainer />
      <OpenContainerButton />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.View`
  flex: 1;
  background-color: ${colors.paleWhite};
`;

export default UnlockContainer;
