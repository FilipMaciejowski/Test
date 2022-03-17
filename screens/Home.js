import * as React from 'react';
import { colors } from '../styles/variables.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main.js';
import UnlockContainer from './UnlockContainer.js';
import Profile from './Profile';
import HomeIcon from '../assets/navigationIcons/HomeScreen.svg';
import UserIcon from '../assets/navigationIcons/UserIcon.svg';
import OpenContainerIcon from '../assets/navigationIcons/OpenContainer.svg';

const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Hjem"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: `${colors.lightGreen}`,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: `${colors.bottomTabGreen}`,
        tabBarInactiveTintColor: `${colors.darkGreen}`,
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        options={{ tabBarIcon: (focused, color) => <UserIcon /> }}
        name="Profil"
        component={Profile}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (focused, color) => <OpenContainerIcon />,
        }}
        name="Åpne Conteiner"
        component={UnlockContainer}
      />
      <Tab.Screen
        options={{ tabBarIcon: (focused, color) => <HomeIcon /> }}
        name="Hjem"
        component={Main}
      />
    </Tab.Navigator>
  );
};

export default Home;
