import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/variables.js';
import OpenIconSVG from '../assets/TæpTegn.svg';

const circles = require('../assets/BackgroundTæp.png');

const OpenContainer = () => {
  return (
    <BoxWrapper>
      <OpenContainerConteiner>
        <OpenConteinerHeader>
          <OpenContainerHeaderText>
            For å åpne en conteiner, bare tæp!
          </OpenContainerHeaderText>
        </OpenConteinerHeader>
        <OpenConteinerVisual source={circles}>
          <OpenConteinerVisualContent>
            <OpenConteinerVisualIconWrapper>
              <OpenIconSVG />
            </OpenConteinerVisualIconWrapper>
            <OpenConteinerVisualText>Tæpp</OpenConteinerVisualText>
          </OpenConteinerVisualContent>
        </OpenConteinerVisual>
      </OpenContainerConteiner>
    </BoxWrapper>
  );
};
const BoxWrapper = styled.View`
  padding: 15px 15px 5px 15px;
`;

const OpenContainerConteiner = styled.View`
  width: 100%;
  height: auto;
`;

const OpenConteinerHeader = styled.View`
  width: 100%;
  background-color: ${colors.lightGreen};
  color: ${colors.mainGrey};
  font-size: 14px;
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  border: 1px solid ${colors.lightGrey};
  text-align: center;
  padding: 10px;
`;

const OpenContainerHeaderText = styled.Text`
  text-align: center;
`;

const OpenConteinerVisual = styled.ImageBackground`
  width: 100%;
  height: 150px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-color: ${colors.lightGrey};
  border-left-color: ${colors.lightGrey};
  border-right-color: ${colors.lightGrey};
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
`;

const OpenConteinerVisualContent = styled.View`
  height: auto;
  padding: 10px;
  justify-content: space-between;
`;
const OpenConteinerVisualText = styled.Text`
  color: ${colors.darkGreen};
  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const OpenConteinerVisualIconWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

/* const OpenIcon = styled(OpenIconSVG)`
  height: auto;
`; */

export default OpenContainer;
