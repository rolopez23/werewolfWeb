import React, {Component} from 'react';
import axios from 'axios';

import {Select} from '../styles/Default.jsx';

class Roles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: 'No Required Role',
      teamSend: null,
      roles: [],
      role: null,
      allowIndependants: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {

    const {target} = e;
    const value = target.name === "allowIndependants" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
    if(target.name === 'team') {
      this.getRoles(value)
    }
    if(target.name === 'role') {
      this.props.update([this.state.teamSend, value])
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
      case 'Werewolf Support':
        team = 'werewolfSupport';
        break;
      case 'Third Party': 
        team = 'independant';
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
        .catch(error=> {
          this.setState({
            roles: [],
            team: 'No Required Role',
            role: null,
          })
        })
        .then(response => {
          this.setState({
            roles: response.data,
            role: response.data[0],
            teamSend: team,
          })
          console.log(response.data)
          this.props.update([team, response.data[0]])
        })

    }
  }

  render() {
    const {team, roles, allowIndependants} = this.state;
    const {players} = this.props
    let secondSelect = null;
    if (team !== 'No Required Role') {
      secondSelect = (
        <Select name="role" onChange={this.handleChange}>
          {roles.map(role=><option>{role}</option>)}
        </Select>
      )
    }
    
    const specialWolves = players !== 8 && players !== 10;
  
    let wildcard = null; 
    let independants = null;
    if (players % 4 === 3) {
      wildcard = (<option>Werewolf Support</option>)
    } else if (players % 4 === 2) {
      wildcard = (<option>Team Switcher</option>)
      independants = (<option>Third Party</option>)
    }


    return (
      <div>
        <div>Design your village!</div>
        {/* <input 
          type="checkbox" 
          name="allowIndependants" 
          value={allowIndependants}
          onChange={this.handleChange}/> */}
        {/* <label htmlFor="allowIndependants">Play with Independants?</label> */}
        <Select onChange={this.handleChange} name="team">
          <option>No Required Role</option>
          <option>Special Villagers</option>
          {specialWolves ? <option>Special Werewolves</option> : null}
          {wildcard}
          {independants}
        </Select>
        {secondSelect}
       

      </div>
    )
  }
}



export default Roles;
