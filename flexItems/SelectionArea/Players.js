/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

const Players = ({players, change}) => (
  <View
    style={{
      flex: 0.2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {players < 19 ? <Button title="Add Player" onPress ={()=> {change(1)}}/> : null}
    <Text>{players}</Text>
    {players > 8 ? <Button
      title="RemovePlayer"
      onPress={() => {
        change(-1);
      }} /> : null}
  </View>
);

export default Players;
