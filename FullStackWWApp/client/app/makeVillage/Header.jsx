import React from 'react';
import {HeaderDiv} from '../styles/app.jsx';
import {HeaderContainer, ClickableText, ClickableArea} from '../styles/makeVillage/Header.jsx';

const Header = ({getVillage, toggleMouse, isPointer, view})=> (
  <HeaderDiv>
    <HeaderContainer>
      <div>Werewolf Village Creator</div>
      <ClickableArea>
        <ClickableText 
          isPointer={isPointer} 
          onClick={()=>{
            console.log('player View')
            view('player')}} 
          onMouseEnter={toggleMouse} 
          onMouseLeave={toggleMouse}>Player View</ClickableText>
        <ClickableText 
          isPointer={isPointer} 
          onClick={()=>{
            console.log('Village View')
            view('village')}} onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>Village View</ClickableText>
        <ClickableText isPointer={isPointer} onClick={getVillage} onMouseEnter={toggleMouse} onMouseLeave={toggleMouse}>Create Village</ClickableText>
      </ClickableArea>
    </HeaderContainer>
    
  </HeaderDiv>
)

export default Header;