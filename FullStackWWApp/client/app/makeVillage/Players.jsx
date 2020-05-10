import React, {Component} from 'react';
import {PlayerContainer, PlayerInput, PlayerLabel} from '../styles/makeVillage/Players.jsx';


class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: this.props.players,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.updatePlayers(e.target.value);
  }



  render() {
    const {players} = this.state
    return (
      <PlayerContainer>
        <PlayerLabel htmlFor="players">Players</PlayerLabel>
        <PlayerInput 
          id="players" 
          name="players" 
          type="number"
          value={players}
          onChange={this.handleChange} 
          min="8" 
          max ="19"/>

      </PlayerContainer>
    )
  }
}



export default Players;