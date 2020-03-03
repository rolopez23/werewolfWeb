import React from 'react';
import { View, Text } from 'react-native';

const Teams = () => (
  <View style={{
    flex: .4, 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    }}>
    <Text>Werewolf Roles</Text>
    <Text>Villager Roles</Text>
    <Text>Independant/Switching Roles</Text>
  </View>
);

export default Teams;
