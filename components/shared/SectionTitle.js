import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles/variables.js';

const SectionTitle = ({ title }) => {
  return (
    <SectionTitleContainer>
      <SectionTitleTextWrapper>
        <SectionTitleText>{title}</SectionTitleText>
      </SectionTitleTextWrapper>
    </SectionTitleContainer>
  );
};

const SectionTitleContainer = styled.View`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: ${colors.lightGreen};
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.lightGrey};
`;

const SectionTitleText = styled.Text`
  color: ${colors.darkGreen};
  font-size: 18px;
  font-weight: 700;
`;

const SectionTitleTextWrapper = styled.View`
  height: auto;
  padding: 5px;
  width: auto;
  border-bottom-width: 3px;
  border-bottom-color: ${colors.shinyGreen};
`;
export default SectionTitle;
