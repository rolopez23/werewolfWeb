import React from 'react';
import {View} from 'react-native';

import Timer from './TimerBar/Timer.js';
import GameSetup from './TimerBar/GameSetup.js';
import Settings from './TimerBar/Settings.js';

const TimerBar = ({styles, create, seer, toggleSeer}) => (
  <View style={[styles.timerBar, styles.border]}>
    <Timer styles={styles} />
    <GameSetup
      styles={styles}
      create={create}
      seer={seer}
      toggleSeer={toggleSeer}
    />
    <Settings styles={styles} />
  </View>
);

export default TimerBar;
