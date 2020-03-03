import React from 'react';
import { View, Text } from 'react-native';

const TitleBar = () => (
  <View style={{
    flex: .1, 
    backgroundColor: 'powderblue',
    justifyContent: "flex-end",
    alignItems: "center"}}>
    <Text>Extreme WereWolf App</Text>
  </View>
);

export default TitleBar;
