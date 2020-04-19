import React from 'react';
import { View, Text } from 'react-native';

const TitleBar = ({styles}) => (
  <View style={styles.title}>
    <Text style={[styles.wolf, styles.titleText, styles.shadow]}>Extreme WereWolf Village Aid</Text>
  </View>
);

export default TitleBar;
