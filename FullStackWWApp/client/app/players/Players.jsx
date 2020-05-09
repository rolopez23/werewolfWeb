import React, {Component} from 'react';
import Player from './Player.jsx';
/* players = {
  number: 1 - 16
  name: {name}
  role: 'null'

}

*/
class Players extends Component {

  constructor(props) {
    super(props)
    this.state = {
      players: this.props.playerList,
    }
    

    this.generatePlayers = this.generatePlayers.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  generatePlayers(number) {
    let players = this.state.players;
    if (number < players.length) {
      players = players.slice(0, number);
    }
    
    for(let i = players.length; i < number; i++) {
      if (!players[i]) {
        players.push({
          number: i + 1,
          name: '',
          role: '',
        })
      }
    }
    this.setState({players})
  }

  updatePlayer(key, player){
    const {players} = this.state;
    players[key] = player;
    this.setState({players})
    this.props.update(players);
  }

  componentDidMount() {
    this.generatePlayers(this.props.count);
  }

  render() {
    const {players} = this.state;
    return (
      <div>
        <h1>Players: </h1>
        {players.map((player, index)=><Player update={this.updatePlayer} player={player} key={index}/>)}
      </div>
    )
  }


}

export default Players;