import * as React from 'react';
import styled from 'styled-components/native';

const ScreenTemplate = ({ children }) => {
  return <ScreenContainer>{children}</ScreenContainer>;
};

const ScreenContainer = styled.View`
  height: 100%;
`;

export default ScreenTemplate;
