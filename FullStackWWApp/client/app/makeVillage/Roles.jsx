import React, {Component} from 'react';
import axios from 'axios';

class Roles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: 'No Required Role',
      teamSend: null,
      roles: [],
      role: null,

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log('changing')
    this.setState({
      [e.target.name]: e.target.value,
    });
    if(e.target.name === 'team') {
      this.getRoles(e.target.value)
    }
    if(e.target.name === 'role') {
      this.props.update([this.state.teamSend, e.target.value])
    }

  }

  getRoles(team) {
    let send = true;
    switch(team) {
      case 'Special Villagers':
        team = 'specialVillager';
        break;
      case 'Special Werewolves':
        team = 'specialWerewolf';
        break;
      case 'Team Switcher':
        team = 'teamSwitcher';
        break;
      case 'No Required Role':
        this.setState({
          roles: [],
        });
        send = false; 
      default:
        send = false
        break;
    }
    if (send) {
      axios.get(`roles/${team}`)
        .then(response => {
          this.setState({
            roles: response.data,
            role: response.data[0],
            teamSend: team,
          })
        })
      // .catch(this.setState({
      //   team: 'No required Roles',
      //   roles: null
      // })) 
    }
  }

  render() {
    const {team, roles} = this.state;
    let secondSelect = null;
    if (team !== 'No Required Role') {
      secondSelect = (
        <select name="role" onChange={this.handleChange}>
          {roles.map(role=><option>{role}</option>)}
        </select>
      )
    }


    return (
      <div>
        <div>Required Role</div>
        <select onChange={this.handleChange} name="team">
          <option>No Required Role</option>
          <option>Special Villagers</option>
          <option>Special Werewolves</option>
          <option>Team Switcher</option>
        </select>
        {secondSelect}
      </div>
    )
  }
}



export default Roles;
