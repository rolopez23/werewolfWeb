import React from 'react';
import {HeaderDiv} from '../styles/app.jsx';
import HeaderContainer from '../styles/Header.jsx';

const Header = ({getVillage})=> (
  <HeaderDiv>
    <HeaderContainer>
      <div>Extreme Werewolf</div>
      <div onClick={getVillage}>Create Village</div>
    </HeaderContainer>
    
  </HeaderDiv>
)

export default Header;