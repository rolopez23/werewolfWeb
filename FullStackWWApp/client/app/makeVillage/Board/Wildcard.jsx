import React from 'react';
import {ThirdPartyBox, ThirdPartyTitle} from '../../styles/ThirdParty.jsx'

const Wildcard = ({wildcard}) => (
  <ThirdPartyBox>
    <ThirdPartyTitle>Team Switcher</ThirdPartyTitle>
    <div>{wildcard.roleName}</div>
  </ThirdPartyBox>
)



export default Wildcard;