import React from 'react';
import {BoardDiv} from '../styles/App.jsx';
import {NoVillage} from '../styles/Default.jsx';
import WolfTeam from './Board/WolfTeam.jsx'
import VillageTeam from './Board/VillageTeam.jsx'
import BoardDisplay from '../styles/makeVillage/Board.jsx';
import Wildcard from './Board/Wildcard.jsx'

const Board = ({village}) => {
  if (village===null) {
    return <NoVillage>Choose Players and Create a Village!</NoVillage>
  } 
  return (
    <BoardDiv>
      <BoardDisplay>
        <WolfTeam 
          direwolf={village.direwolf}
          specialWolves = {village.roleList.filter((role) =>
          role.roleType==='specialWerewolf')}
          werewolves={village.werewolves}
          werewolfSupport={village.roleList.filter((role) =>
            role.roleType==='werewolfSupport')}/>
        <VillageTeam 
          wildcard={village.thirdParty}
          villagers={village.villagers}
          specialVillagers={village.roleList.filter((role) =>
            role.roleType==='specialVillager')
          }
        />
        {village.thirdParty ? <Wildcard wildcard={village.roleList.filter((role) =>
          role.roleType==='teamSwitcher')[0]}/> : null}
      </BoardDisplay>

    </BoardDiv>
  )
}


export default Board;