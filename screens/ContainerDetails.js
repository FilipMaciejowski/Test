import * as React from 'react';
import { colors, layout } from '../styles/variables.js';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import DiagramCircleVisual from '../assets/DiagramCircle.svg';

import SectionTitle from '../components/shared/SectionTitle';

const ContainerDetails = ({ route }) => {
  const { name, filling } = route.params;
  /* const DATA = [{ value: filling, color: 'red' }]; */

  const containerFillingMessage = value => {
    if (value < 100) {
      return <ContentText>Det er nok plass i conteineren!</ContentText>;
    } else {
      return <ContentText>Det er ikke nok plass i conteineren!</ContentText>;
    }
  };

  return (
    <ContainerDetailsWrapper>
      <SectionTitle title={name} />
      <ContainerDetailsContent>
        <Display>
          <DiagramCircleVisual />
          <Text style={{ fontWeight: '700', fontSize: 30 }}>{filling}%</Text>
        </Display>
        {containerFillingMessage(filling)}
      </ContainerDetailsContent>
    </ContainerDetailsWrapper>
  );
};

const ContainerDetailsWrapper = styled.View`
  height: 100%;
  width: 100%;
  padding: 0 15px 0 15px;
  background-color: ${colors.paleWhite};
`;

const ContainerDetailsContent = styled.View`
  height: auto;
  ${layout.center};
  margin: 10px 0 10px 0;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  background-color: ${colors.white};
  padding: 15px;
`;

const Display = styled.View`
  width: 100%;
  ${layout.center};
`;

/* const DiagramCircle = styled(DiagramCircleVisual)``; */

const ContentText = styled.Text`
  color: ${colors.mainGrey};
  font-size: 24px;
  margin: 15px 0;
`;
export default ContainerDetails;
