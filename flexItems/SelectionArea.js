import React from 'react';
import { View, Text } from 'react-native';
import Teams from './SelectionArea/Teams.js';
import Sets from './SelectionArea/Sets.js';
import Players from './SelectionArea/Players.js';

const SelectionArea = ({players, change}) => (
  <View style={{
    flex: .2,
    backgroundColor: 'yellow'
  }}>
    <Teams />
    <Sets />
    <Players players={players} change={change} />
  </View>
);

export default SelectionArea;
