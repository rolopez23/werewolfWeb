import React, {Component} from 'react';
import {AppContainer} from './styles/app.jsx';
import Board from './makeVillage/Board.jsx'
import Header from './makeVillage/Header.jsx'
import Roles from './makeVillage/Roles.jsx'
import Player from './makeVillage/Players.jsx'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      village: null,
      players: 8,
    }
    this.updatePlayers = this.updatePlayers.bind(this);
  }

  updatePlayers(players) {
    this.setState({players})
  }

  render() {
    return (
    <AppContainer>
      <Header />
      <Player updatePlayers={this.updatePlayers}/>
      <Board village={this.village}/>
      <Roles />
    </AppContainer>
    )
  
  }
}

export default App;
