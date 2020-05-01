import React from 'react';
import {HeaderDiv} from '../styles/app.jsx';
import HeaderContainer from '../styles/Header.jsx';

const Header = ({getVillage})=> (
  <HeaderDiv>
    <HeaderContainer>
      <div>Werewolf Village Creator</div>
      <div onMouseOver={} onClick={getVillage}>Create Village</div>
    </HeaderContainer>
    
  </HeaderDiv>
)

export default Header;