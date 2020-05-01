import Styled from 'styled-components';

const VillageBox = Styled.div`
display: flex;
flex-flow: column nowrap;
height: 100%;
width: 40%;
justify-content: center;
align-items: center;
color: blue;
border-style: solid;
border-width: ${props=>props.wildcard ? "0px 3px 0px 3px" : "0px 0px 0px 3px"}; 
border-color: black;
font-family: "Libre Baskerville", serif; 
text-shadow: 0 1px 1px #fff;
`
const VillageTitle = Styled.div`
font-size: 30px;
border-style: solid;
border-width: 0px 0px 3px 0px; 
border-color: black;
width: 100%;
text-align: center;
margin: 5px;
`

export {
VillageBox,
VillageTitle
};