import React from 'react';
import {View, Text, Button} from 'react-native';

import CustomButton from '../customButton/CustomButton.js';

const GameSetup = ({styles}) => (
  <View style={[styles.gameSetup, styles.border]}>
    <CustomButton label={'Seer'} styles={styles} onPress={() => {}} />
    <CustomButton label={'Independants'} styles={styles} onPress={() => {}} />
    <CustomButton label={'New Village'} styles={styles} onPress={() => {}} />
    <CustomButton label={'Start Game'} styles={styles} onPress={() => {}} />
  </View>
);

export default GameSetup;
