import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styled from 'styled-components/native';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import Header from './shared/Header';
import ContainerDetails from '../screens/ContainerDetails';

const MainView = () => {
  const [isLogged, setIsLogged] = useState(false);

  const name = ', Filip';
  const Stack = createNativeStackNavigator();

  return (
    <MainViewContainer>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LogIn'}>
          <Stack.Screen
            options={{
              header: props => <Header {...props} back={false} name={name} />,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              header: props => <Header {...props} back={false} name />,
            }}
            name="LogIn"
            component={LogIn}
          />
          <Stack.Screen
            options={{
              header: props => <Header {...props} back={true} name={name} />,
            }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{
              header: props => <Header {...props} back={true} name={name} />,
            }}
            name="ContainerDetails"
            component={ContainerDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MainViewContainer>
  );
};

const MainViewContainer = styled.View`
  flex: 1;
`;

export default MainView;
