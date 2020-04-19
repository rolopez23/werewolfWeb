import React from 'react';
import { View, Text } from 'react-native';
import Teams from './SelectionArea/Teams.js';
import Sets from './SelectionArea/Sets.js';
import Players from './SelectionArea/Players.js';

const SelectionArea = ({players, change, styles}) => (
  <View style={styles.selectionArea}>
    <Teams styles={styles} />
    <Sets styles={styles} />
    <Players players={players} change={change} styles={styles}/>
  </View>
);

export default SelectionArea;
