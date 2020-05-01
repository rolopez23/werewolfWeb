import Styled from 'styled-components';

//Flex container
const AppContainer = Styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Libre Baskerville", serif; 
  text-shadow: 0 1px 1px #fff;
  width: 100%;
  height: 100%;
`;

//Flex Items
const HeaderDiv = Styled.div`
  width: 100%;
  height: 15%;
  font-size: 30px;
  padding: 20px 5px;
`
const PlayersDiv = Styled.div`
  width: 100%;
  height: 15%;
  font-size: 20px;
  padding: 20px 5px;
`
const BoardDiv = Styled.div`
  width: 100%;
  height: 50%;
  font-size: 25px;
  padding: 20px 5px;
  align-self: center;
`

const RoleDiv = Styled.div`
  width: 100%;
  height: 20%;
  font-size: 25px;
  padding: 20px 5px;
`


export {
  AppContainer,
  HeaderDiv,
  PlayersDiv,
  BoardDiv,
  RoleDiv,
};