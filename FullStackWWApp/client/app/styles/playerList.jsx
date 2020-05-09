import Styled from 'styled-components';

const PlayerContainer = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  padding: 10px, 30px;
  font-family: "Libre Baskerville", serif; 
  text-shadow: 0 1px 1px #fff;
  font-size: 20px;
  padding: 5px 30px;
  align-items: center;
`



const PlayerInput = Styled.input`
  height: 30px;
  width: 100px;
  font-family: "Libre Baskerville", serif; 
  text-shadow: 0 1px 1px #fff;
  align-self: center;
  font-size: 20px;
  padding-left: 12px;
`

const PlayerLabel = Styled.label`
  font-family: "Libre Baskerville", serif; 
  text-shadow: 0 1px 1px #fff;
  align-self: center;
  font-size: 20px;
  margin-right: 20px;
  margin-left: 20px;
`

const Text = Styled.div`
  margin-left: 20px;
`

export { 
  PlayerContainer,
  PlayerInput,
  PlayerLabel,
  Text
}