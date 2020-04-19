import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';

import TitleBar from './flexItems/TitleBar.js';
import SelectionArea from './flexItems/SelectionArea.js';
import GameSummary from './flexItems/GameSummary.js';
import TimerBar from './flexItems/TimerBar.js';
import styleSheet from './StyleSheet/styles.js';

const Village = require('./villageRules/village.js');

// const testVillage = new Village(15);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: 8,
      requireSeer: false,
      allowIndependants: false,
      styles: styleSheet,
      village: null,
    };
    this.changePlayers = this.changePlayers.bind(this);
    this.createVillage = this.createVillage.bind(this);
    this.toggleSeer = this.toggleSeer.bind(this);
  }

  createVillage() {
    const {players, requireSeer} = this.state;
    const roles = [];
    if (requireSeer) {
      roles.push(['', 'Seer']);
    }
    const village = new Village(players, false, roles);
    this.setState({village: village});
  }

  toggleSeer() {
    let {requireSeer} = this.state;
    requireSeer = !requireSeer;
    this.setState({requireSeer: requireSeer});
  }

  changePlayers(increment) {
    let {players} = this.state;
    players += increment;
    if (players < 8) {
      players = 8;
    }
    if (players > 19) {
      players = 19;
    }
    this.setState({
      players: players,
    });
  }

  render() {
    const {players, styles, village, requireSeer} = this.state;
    return (
      <View style={[styles.app, styles.backgroundColor]}>
        {/* <ImageBackground
          source={require('/Users/robertlopez/Desktop/extremeWW2/images/sky1.jpeg')}
          style={styles.fullScreen}> */}
        <ImageBackground
          source={require('/Users/robertlopez/Desktop/extremeWW2/images/claw-scratch-png-claw-scratch-png-3-png-image-2816.png')}
          style={[styles.fullScreen]}>
          <TitleBar styles={styles} />
          <SelectionArea
            players={players}
            change={this.changePlayers}
            styles={styles}
          />
          <GameSummary styles={styles} village={village} />
          <TimerBar
            styles={styles}
            create={this.createVillage}
            seer={requireSeer}
            toggleSeer={this.toggleSeer}
          />
          <View style={styles.gutter} />
        </ImageBackground>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

export default App;
