import Styled from 'styled-components';

const WolfBox = Styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 30%;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0px 0px 0px 0px; 
  border-color: black;
  color: red;
  font-family: "Libre Baskerville", serif; 
  text-shadow: 0 1px 1px #fff;
`
const WolfTitle = Styled.div`
  font-size: 30px;
  border-style: solid;
  border-width: 0px 0px 3px 0px; 
  border-color: black;
  width: 100%;
  text-align: center;
  margin: 5px;
`

export {
  WolfBox,
  WolfTitle
};