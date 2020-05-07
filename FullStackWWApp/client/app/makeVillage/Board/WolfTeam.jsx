import React from 'react';
import {WolfBox, WolfTitle} from '../../styles/makeVillage/Wolf.jsx'

const WolfTeam = ({direwolf, specialWolves, werewolves, werewolfSupport}) => (
  <WolfBox>
    <WolfTitle>Werewolf Team</WolfTitle>
    {werewolves === 1 ? <div>Werewolf</div> : <div>{werewolves} Werewolves</div>}
    {direwolf ? <div>Direwolf </div> : null}
    {specialWolves.map(wolf=><div key={wolf.id}>{wolf.roleName}</div>)}
    {werewolfSupport.map(role=><div key={role.id}>{role.roleName}</div>)}
  </WolfBox>
)



export default WolfTeam;