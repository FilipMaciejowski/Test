import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles/variables.js';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const LoginInput = ({ label, placeholder, value, changeValue }) => {
  return (
    <View>
      <LoginLabel>{label}</LoginLabel>
      <UserInput
        autofocus
        placeholder={placeholder}
        value={value}
        onChangeText={changeValue}
      />
    </View>
  );
};

const LoginLabel = styled.Text`
  color: ${colors.darkGreen};
  font-size: 14px;
  font-weight: 600;
  padding: 7.5px 0 7.5px 0;
  margin-left: 1px;
`;
const UserInput = styled.TextInput`
  height: 45px;
  width: 325px;
  background-color: ${colors.white};
  border-radius: 10px;
  text-align: left;
  padding: 10px;
  margin-bottom: 30px;
`;

export default LoginInput;
