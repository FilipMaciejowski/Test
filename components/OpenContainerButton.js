import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled from 'styled-components/native';
import { colors, layout } from '../styles/variables.js';

const OpenContainerButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <BoxWrapper>
      <OpenContainerConteiner>
        <OpenConteinerHeader>
          <OpenContainerHeaderText>
            ...<Italic>eller</Italic> trykk på knappen!
          </OpenContainerHeaderText>
        </OpenConteinerHeader>
        <OpenConteinerVisual>
          <OpenConteinerVisualContent>
            <SwitchWrapper>
              <Switch
                trackColor={{ false: `${colors.mainGrey}`, true: '#81b0ff' }}
                thumbColor={
                  isEnabled ? `${colors.shinyGreen}` : `${colors.lightGrey}`
                }
                ios_backgroundColor={`${colors.mainGrey}`}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ transform: [{ scaleX: 1.75 }, { scaleY: 1.75 }] }}
              />
            </SwitchWrapper>
            <Info isEnabled={isEnabled}>
              Conteineren er {isEnabled ? 'åpent' : 'låst'}
            </Info>
          </OpenConteinerVisualContent>
        </OpenConteinerVisual>
      </OpenContainerConteiner>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.View`
  padding: 10px 15px 5px 15px;
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

const Italic = styled.Text`
  font-style: italic;
  font-weight: 700;
`;

const OpenConteinerVisual = styled.View`
  width: 100%;
  height: ${props => (props.large ? '300px' : '150px')};
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
  flex: 1;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const SwitchWrapper = styled.View`
  width: 50%;
  flex: 1;
  ${layout.center};
`;

const Info = styled.Text`
  margin-top: 15px;
  color: ${props =>
    props.isEnabled ? `${colors.darkGreen}` : `${colors.mainGrey}`};
  font-size: 20px;
  font-weight: 600;
`;
export default OpenContainerButton;
