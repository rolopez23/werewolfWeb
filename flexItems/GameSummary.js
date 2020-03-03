import React from 'react';
import { View, Text } from 'react-native';

const GameSummary = ({styles}) => (
  <View style={[styles.gameSummary, styles.border]}>
    <Text style={styles.text}>Game Summary</Text>
  </View>)

export default GameSummary;
