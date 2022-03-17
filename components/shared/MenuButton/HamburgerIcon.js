import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../styles/variables';

const HamburgerIcon = () => {
  return (
    <IconWrapper>
      <IconLine />
      <IconLine />
      <IconLine />
    </IconWrapper>
  );
};

const IconWrapper = styled.View`
  width: 30px;
  height: 30px;
  background-color: ${colors.lightGreen};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const IconLine = styled.View`
  margin: 1px;
  width: 17.5px;
  height: 2px;
  border-radius: 1px;
  background-color: ${colors.darkGreen};
`;

export default HamburgerIcon;
