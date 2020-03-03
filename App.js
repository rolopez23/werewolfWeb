import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import TitleBar from './flexItems/TitleBar.js';
import SelectionArea from './flexItems/SelectionArea.js';
import GameSummary from './flexItems/GameSummary.js';
import TimerBar from './flexItems/TimerBar.js';
import styleSheet from './StyleSheet/styles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 8,
      requireSeer: false,
      allowIndependants: false,
      styles: styleSheet,
    };
    this.changePlayers = this.changePlayers.bind(this);
  }

  changePlayers(increment) {
    let {players} = this.state;
    this.setState({
      players: (players += increment),
    });
  }

  render() {
    const {players, styles} = this.state;
    return (
      <View style={styles.app}>
        <TitleBar styles={styles} />
        <SelectionArea
          players={players}
          change={this.changePlayers}
          styles={styles}
        />
        <GameSummary styles={styles} />
        <TimerBar styles={styles} />
        <View style={styles.gutter} />
      </View>
    );
  }
}

export default App;
