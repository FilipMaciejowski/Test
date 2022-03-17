import React from 'react';
import { colors } from '../../styles/variables';
import styled from 'styled-components/native';
import TrashbinIcon from '../../assets/Trashbin.svg';
import TrashbinInactiveIcon from '../../assets/TrashbinInactive.svg';
import { useNavigation } from '@react-navigation/native';

const Container = ({ name, filling, active, item }) => {
  const navigation = useNavigation();
  const directionDetailsContainerHandler = () => {
    navigation.navigate('ContainerDetails', item);
  };

  return (
    <ContainerBox>
      <ContainerHeader>
        <ContainerHeaderText>{name}</ContainerHeaderText>
      </ContainerHeader>
      <ContainerContent>
        {active ? (
          <FillingWrapper>
            <IconContainer>
              <TrashbinIcon />
            </IconContainer>
            <FillingText>
              Fyllingsnivå: <TextBold>{filling.toString()}%</TextBold>
            </FillingText>
          </FillingWrapper>
        ) : (
          <FillingWrapper>
            <IconContainer>
              <TrashbinInactiveIcon />
            </IconContainer>
            <FillingText>Container er ikke aktiv</FillingText>
          </FillingWrapper>
        )}
        {active && (
          <DetailsContainer>
            <DetailsText>Se detalier</DetailsText>
            <DetailsButtonWrapper onPressIn={directionDetailsContainerHandler}>
              <DetailsButton>➔</DetailsButton>
            </DetailsButtonWrapper>
          </DetailsContainer>
        )}
      </ContainerContent>
    </ContainerBox>
  );
};

const ContainerBox = styled.View`
  margin: 10px 0 10px 0;
  width: 100%;
`;

const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0 5px 0;
  background-color: ${colors.lightGreen};
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-color: ${colors.lightGrey};
  border-left-color: ${colors.lightGrey};
  border-right-color: ${colors.lightGrey};
`;

const ContainerHeaderText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.darkGreen};
  text-align: center;
`;

const ContainerContent = styled.View`
  padding: 10px 0 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.lightGrey};
  background-color: ${colors.white};
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-color: ${colors.lightGrey};
  border-left-color: ${colors.lightGrey};
  border-right-color: ${colors.lightGrey};
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  width: 100%;
`;

const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const FillingWrapper = styled.View`
  width: 45%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px 0 10px;
`;

const FillingText = styled.Text`
  color: ${colors.mainGrey};
`;

const TextBold = styled.Text`
  color: ${colors.mainGrey};
  font-weight: 800;
`;

const DetailsContainer = styled.View`
  width: 45%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px 0 10px;
  width: auto;
`;

const DetailsText = styled.Text`
  font-size: 14px;
  margin-right: 10px;
`;
const DetailsButtonWrapper = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const DetailsButton = styled.Text`
  font-size: 22px;
  color: ${colors.shinyGreen};
`;
export default Container;
