import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../styles/variables.js';

import ErrorSVG from '../assets/Error.svg';

const ErrorBox = ({ children }) => {
  return (
    <Error elevation={2}>
      <SVGWrapper>
        <ErrorSVG />
      </SVGWrapper>
      <ErrorText>{children}</ErrorText>
    </Error>
  );
};

const Error = styled.View`
  position: absolute;
  bottom: -45px;
  height: 35px;
  border-radius: 10px;
  width: 200px;
  background-color: ${colors.errorOrange};
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
`;
const SVGWrapper = styled.View`
  width: auto;
  padding: 10px;
`;

const ErrorText = styled.Text`
  color: ${colors.errorRed};
  font-weight: 600;
  font-size: 12px;
`;

export default ErrorBox;
