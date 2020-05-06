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
      createVillage: false,
      requiredRole: [],
    }
    this.updatePlayers = this.updatePlayers.bind(this);
    this.getVillage = this.getVillage.bind(this);
    this.updateRequiredRole = this.updateRequiredRole.bind(this);
  }

  updatePlayers(players) {
    this.setState({players})
  }
  //role is an array with team, than role
  updateRequiredRole(role) {
    console.log('updating')
    this.setState({
      requiredRole: role,
    })
  }

  getVillage() {
    const {players, requiredRole} = this.state
    console.log('click')
    if(requiredRole.length < 1) {
      axios.get(`/village/${players}`)
        .then(results=> {
          this.setState({
            village: results.data,

          })
          // console.log(results.data);
        })
        .catch(error=>{console.error(error)})
    } else {
        axios.get(`/village/${players}/false/${JSON.stringify(requiredRole)}`)
        .then(results=> {
          this.setState({
            village: results.data,

          })
        // console.log(results.data);
      })
      .catch(error=>{console.error(error)})
    }
  }

  render() {
    const {village} = this.state;
    return (
    <AppContainer>
      <Header getVillage={this.getVillage}/>
      <Player updatePlayers={this.updatePlayers}/>
      <Board village={village}/>
      <Roles update={this.updateRequiredRole}/>
    </AppContainer>
    )
  
  }
}

export default App;
