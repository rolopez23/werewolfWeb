import React, {Component} from 'react';
import {AppContainer} from './styles/app.jsx';
import Board from './makeVillage/Board.jsx'
import Header from './makeVillage/Header.jsx'
import Roles from './makeVillage/Roles.jsx'
import Player from './makeVillage/Players.jsx'
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      village: null,
      players: 8,
    }
    this.updatePlayers = this.updatePlayers.bind(this);
    this.getVillage = this.getVillage.bind(this);
  }

  updatePlayers(players) {
    this.setState({players})
  }

  getVillage() {
    const {players} = this.state
    axios.get(`/village/${players}`)
      .then(results=> {
        this.setState({
          village: results.data,
        })
        console.log(results.data);
      })
      .catch(error=>{console.error(error)})
      
  }

  render() {
    return (
    <AppContainer>
      <Header getVillage={this.getVillage}/>
      <Player updatePlayers={this.updatePlayers}/>
      <Board village={this.village}/>
      <Roles />
    </AppContainer>
    )
  
  }
}

export default App;
