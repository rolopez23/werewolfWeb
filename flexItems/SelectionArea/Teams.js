import React from 'react';
import {View, Text} from 'react-native';

const Teams = ({styles}) => (
  <View style={styles.teams}>
    <Text style={[styles.text, styles.wolf, styles.shadow]}>Wolf Team</Text>
    <Text style={[styles.text, styles.village, styles.shadow]}>Villagers</Text>
    <Text style={[styles.text, styles.switch, styles.shadow]}>Wildcards</Text>
  </View>
);

export default Teams;
