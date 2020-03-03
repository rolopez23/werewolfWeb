import React from 'react';
import { View, Text } from 'react-native';

const Timer = ({styles}) => (
  <View style={[styles.timer, styles.border]}>
    <Text>Timer</Text>
  </View>
);

export default Timer;
