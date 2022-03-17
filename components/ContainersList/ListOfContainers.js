import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles/variables.js';
import Containers from '../ContainersList/Containers.js';

const ListOfContainers = ({ navigation }) => {
  const stedsNavn = 'Stallbakken 7B';
  return (
    <AvailableConteinersConteiner>
      <HeaderWrapper>
        <AvailableConteinersHeader>
          <AvailableConteinersHeaderTextMainWrapper>
            <AvailableConteinersHeaderTextMain>
              {stedsNavn}
            </AvailableConteinersHeaderTextMain>
          </AvailableConteinersHeaderTextMainWrapper>
          <AvailableConteinersHeaderText>
            Tilgjengelige conitenere
          </AvailableConteinersHeaderText>
          <AvailableConteinersHeaderTextAditional>
            See hvor mye søpla inne i conteineren
          </AvailableConteinersHeaderTextAditional>
        </AvailableConteinersHeader>
      </HeaderWrapper>
      <Containers />
    </AvailableConteinersConteiner>
  );
};

const AvailableConteinersConteiner = styled.View`
  width: 100%;
  height: 500px;
`;

const HeaderWrapper = styled.View`
  padding: 0 15px 0 15px;
`;

const AvailableConteinersHeader = styled.View`
  height: 100px;
  width: 100%;
  border-radius: 7.5px;
  margin-top: 10px;
  border: 1px solid ${colors.lightGrey};
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

const AvailableConteinersHeaderTextMainWrapper = styled.View`
  padding: 5px;
  height: auto;
  width: auto;
  border-bottom-width: 3px;
  border-bottom-color: ${colors.shinyGreen};
`;
const AvailableConteinersHeaderTextMain = styled.Text`
  color: ${colors.darkGreen};
  font-size: 18px;
  font-weight: 700;
`;
const AvailableConteinersHeaderText = styled.Text`
  margin-top: 16px;
  color: ${colors.darkGreen};
  font-size: 14px;
  font-weight: 700;
`;

const AvailableConteinersHeaderTextAditional = styled.Text`
  margin: 5px 0 5px 0;
  color: ${colors.mainGrey};
  font-size: 12px;
  font-weight: 500;
`;

export default ListOfContainers;
