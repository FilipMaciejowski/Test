import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { colors } from '../../styles/variables';
import styled from 'styled-components/native';

import Container from './Container';

const Containers = () => {
  const [containers, setContainers] = useState([
    { name: 'Matavfall', filling: 50, id: 1, active: true },
    { name: 'Restavfall', filling: 10, id: 2, active: true },
    { name: 'Papir', filling: 100, id: 3, active: true },
    { name: 'Plast', filling: 20, id: 4, active: false },
    { name: 'Glass og metal', filling: 75, id: 5, active: true },
  ]);
  const renderItem = ({ item }) => {
    return (
      <Container
        name={item.name}
        filling={item.filling}
        active={item.active}
        item={item}
      />
    );
  };

  return (
    <ListWrapper
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <ContainersList
        contentContainerStyle={{
          display: 'block',
        }}
        data={containers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.View`
  width: 100%;
  margin-bottom: 100px;
`;

const ContainersList = styled.FlatList`
  height: auto;
  width: 100%;
  padding: 0 15px 0 15px;
`;

export default Containers;
