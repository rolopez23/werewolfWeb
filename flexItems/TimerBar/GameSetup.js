import React from 'react';
import {View, Text, Button} from 'react-native';

import CustomButton from '../customButton/CustomButton.js';

const GameSetup = ({styles, create, seer, toggleSeer}) => {
  let seerStyle = 'normal';
  let seerText = 'Seer in Village';
  if (!seer) {
    seerStyle = 'fade';
    seerText = 'All Villages';
  }
  return (
    <View style={[styles.gameSetup, styles.border]}>
      <CustomButton
        label={seerText}
        fade={seerStyle}
        styles={styles}
        onPress={toggleSeer}
      />
      <CustomButton
        label={'Independants'}
        fade={'normal'}
        styles={styles}
        onPress={() => {}}
      />
      <CustomButton
        label={'New Village'}
        fade={'normal'}
        styles={styles}
        onPress={create}
      />
      <CustomButton
        label={'Start Game'}
        fade={'normal'}
        styles={styles}
        onPress={() => {}}
      />
    </View>
  );
};

export default GameSetup;
