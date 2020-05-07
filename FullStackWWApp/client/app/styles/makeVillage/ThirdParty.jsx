import Styled from 'styled-components';

const ThirdPartyBox = Styled.div`
display: flex;
flex-flow: column nowrap;
height: 100%;
width: 30%;
justify-content: center;
align-items: center;
border-style: solid;
border-width: 0px 0px 0px 0px; 
border-color: black;
color: purple;
font-family: "Libre Baskerville", serif; 
text-shadow: 0 1px 1px #fff;
`
const ThirdPartyTitle = Styled.div`
  font-size: 30px;
  border-style: solid;
  border-width: 0px 0px 3px 0px; 
  border-color: black;
  text-align: center;
  width: 100%;
  margin: 5px;
`

export {
  ThirdPartyBox,
  ThirdPartyTitle
};