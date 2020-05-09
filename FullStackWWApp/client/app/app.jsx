import React, {Component} from 'react';
import {AppContainer} from './styles/App.jsx';
import Board from './makeVillage/Board.jsx'
import Header from './makeVillage/Header.jsx'
import Players from './makeVillage/Players.jsx'
import Roles from './makeVillage/Roles.jsx'
import axios from 'axios';
import PlayerList from './players/Players.jsx';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      village: null,
      playerList:  [],
      players: 8,
      createVillage: false,
      requiredRole: [],
      allowIndies: false,
      view: 'village',
    }
    this.updatePlayers = this.updatePlayers.bind(this);
    this.getVillage = this.getVillage.bind(this);
    this.updateRequiredRole = this.updateRequiredRole.bind(this);
    this.toggleMouse = this.toggleMouse.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.updatePlayerList = this.updatePlayerList.bind(this);
    this.assignVillage = this.assignVillage.bind(this);
  }

  assignVillage() {
    console.log('Building a village')
    let {playerList, players, village} = this.state;
    console.log(playerList)
    if (players < playerList.length) {
      players = players.slice(0, number);
    }
    
    for(let i = playerList.length; i < players; i++) {
      if (!playerList[i]) {
        playerList.push({
          number: i + 1,
          name: '',
          role: '',
        })
      }
    }

    let villageList = village.roleList;
    for(let i = 0; i < village.villagers; i++) {
      villageList.push({roleName: 'Villager'})
    }
    for(let i = 0; i < village.werewolves; i++) {
      villageList.push({roleName: 'Werewolf'})
    }
    for(let i = 0; i < village.direwolf; i++) {
      villageList.push({roleName: 'Direwolf'})
    }
    let player = 0;
    while (villageList.length >= 1) {
      let index = Math.floor(Math.random() * villageList.length);
      let role = villageList.pop(index)
      playerList[player].role = role;
      player++;
    }
    console.log(playerList)
    this.setState({playerList})

  }

  updatePlayerList(playerList) {
    this.setState({playerList})
  }

  toggleMouse() {
    this.setState({
      isPointer: !this.state.isPointer,
    })
  }

  toggleView(view) {
    this.setState({view})
  }

  updatePlayers(players) {
    players = parseInt(players, 10)
    this.setState({players})
  }
  //role is an array with team, than role
  updateRequiredRole(role) {
    this.setState({
      requiredRole: role,
    })
  }

  getVillage() {
    const {players, requiredRole} = this.state
    console.log('click', requiredRole.length)
    if(requiredRole.length < 1) {
      axios.get(`/village/${players}`)
        .then(results=> {
          this.setState({
            village: results.data,

          })
          // console.log(results.data);
        })
        .then(()=>{
          console.log('Making a village')
          this.assignVillage();
      })
        .catch(error=>{console.error(error)})
    } else {
        axios.get(`/village/${players}/false/${JSON.stringify(requiredRole)}`)
        .then(results=> {
          this.setState({
            village: results.data,
          }, this.assignVillage)
        // console.log(results.data);
      })
      .catch(error=>{console.error(error)})
    }
  }

  render() {
    const {view, village, isPointer, players, playerList} = this.state;
    return (
    <AppContainer>
      <Header 
        toggleMouse={this.toggleMouse} 
        getVillage={this.getVillage}
        isPointer={isPointer}
        view={this.toggleView}/>
      {view === "village" ? <Players updatePlayers={this.updatePlayers}/> : null}
      {view === "village" ? <Board village={village}/> : null}
      {view === "village" ? <Roles players={players} update={this.updateRequiredRole}/> : null}
      {view === "player" ? <PlayerList village={village} playerList ={playerList} update={this.updatePlayerList} count={players}/> : null}    
    </AppContainer>
    )
  
  }
}

export default App;
