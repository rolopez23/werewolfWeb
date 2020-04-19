import React from 'react';
import { View, Text } from 'react-native';

import UpperBox from './GameArea/UpperBox.js';
import LowerBox from './GameArea/LowerBox.js';

const GameSummary = ({styles, village}) => (
  <View style={[styles.gameSummary, styles.border]}>
    {village ? <UpperBox styles={styles} village={village} /> : null}
    {village ? <LowerBox styles={styles} village={village} /> : null}
  </View>
);

export default GameSummary;
