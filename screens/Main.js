import * as React from 'react';
import { colors } from '../styles/variables.js';
import styled from 'styled-components/native';
import OpenContainer from '../components/OpenContainer.js';
import ListOfContainers from '../components/ContainersList/ListOfContainers.js';

const Main = () => {
  return (
    <ContentWrapper>
      <OpenContainer />
      <ListOfContainers />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${colors.paleWhite};
`;
export default Main;
