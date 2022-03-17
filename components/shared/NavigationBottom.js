import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles/variables';
import { useNavigation } from '@react-navigation/native';
import UserIcon from '../../assets/navigationIcons/UserIcon.svg';
import OpenContainer from '../../assets/navigationIcons/OpenContainer.svg';
import TrashBin from '../../assets/navigationIcons/TrashBin.svg';
import HomeScreen from '../../assets/navigationIcons/HomeScreen.svg';
import { RectButton } from 'react-native-gesture-handler';

const NavigationBottom = () => {
  const navigation = useNavigation();
  const [clicked, setClicked] = useState(null);
  const [navigationList, setNavigatgionList] = useState([
    {
      icon: UserIcon,
      direction: 'LogIn',
      id: 1,
    },
    {
      icon: OpenContainer,
      direction: '',
      id: 2,
    },
    {
      icon: HomeScreen,
      direction: 'Home',
      id: 3,
    },
    {
      icon: TrashBin,
      direction: '',
      id: 4,
    },
  ]);

  const renderItem = ({ item, index }) => {
    return (
      <IconListContainer
        onPressIn={() => redirectHandler(item.direction, index)}
        pressed={index === clicked ? true : false}>
        {item.icon}
      </IconListContainer>
    );
  };

  const redirectHandler = (direction, index) => {
    if (!direction) {
      return;
    }
    navigation.navigate(direction);
    setClicked(index);
  };

  return (
    <NavContainer>
      <IconsList
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
        }}
        data={navigationList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </NavContainer>
  );
};

const NavContainer = styled.View`
  background-color: ${colors.lightGreen};
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-top-color: ${colors.lightGrey};
  border-top-width: 1px;
`;

const IconsList = styled.FlatList`
  flex-direction: row;

  width: 100%;
`;

const IconListContainer = styled.Pressable`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.pressed ? colors.shinyGreen : colors.lightGreen};
`;

export default NavigationBottom;
