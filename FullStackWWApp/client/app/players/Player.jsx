import React, {Component} from 'react';
import {PlayerContainer, PlayerInput, PlayerLabel, Text} from '../styles/playerList.jsx';

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: this.props.player,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let field = e.target.name;
    let value = e.target.value;
    let {player} = this.state;
    player[field] = value;
    this.setState({player});
    this.props.update(player.number - 1, player)
  }

  render() {
    const {player} = this.state;
    let villageText = 'Create A Village'
    return (
      <PlayerContainer>
        <Text>{`${player.number}.`}</Text>
        <PlayerLabel htmlFor="name">Player: </PlayerLabel>
        <PlayerInput 
          type="text"
          name="name" 
          value={player.name} 
          onChange={this.handleChange}/>
    
        <Text>{player.role === '' ? `${villageText}` : `Role: ${player.role.roleName}`}</Text>
      </PlayerContainer>
    )
  }

}

export default Player;