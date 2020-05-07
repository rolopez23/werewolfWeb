import React from 'react';
import {HeaderDiv} from '../styles/app.jsx';
import {HeaderContainer, ClickableText} from '../styles/Header.jsx';

const Header = ({getVillage, toggleMouse, isPointer})=> (
  <HeaderDiv>
    <HeaderContainer>
      <div>Werewolf Village Creator</div>
      <ClickableText isPointer={isPointer} onClick={getVillage} onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>Create Village</ClickableText>
    </HeaderContainer>
    
  </HeaderDiv>
)

export default Header;