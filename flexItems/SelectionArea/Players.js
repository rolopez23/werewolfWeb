/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';

import PlayerChanger from './PlayerChanger.js';

const Players = ({players, change, styles}) => (
  <View style={styles.players}>
    <Text style={[styles.titleText, styles.normal]}>Players: {players}</Text>
    <PlayerChanger styles={styles} change={change} />
  </View>
);

export default Players;
