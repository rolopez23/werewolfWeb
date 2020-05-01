import React from 'react';
import {VillageBox, VillageTitle} from '../../styles/Village.jsx'

const VillageTeam = ({wildcard, villagers, specialVillagers}) => (
  <VillageBox wildcard={wildcard}>
    <VillageTitle>Village Team</VillageTitle>
    <div>{villagers} Villagers</div>
    {specialVillagers.map(villager=><div key={villager.id}>{villager.roleName}</div>)}
  </VillageBox>
)



export default VillageTeam;