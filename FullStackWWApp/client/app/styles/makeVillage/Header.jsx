import Styled from 'styled-components';

const HeaderContainer = Styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 3px 0px; 
  border-color: black;
  padding: 10px, 30px;
`

const ClickableArea = Styled.div`
  display: flex;
  flex-flow: row nowrap;  
`

const ClickableText = Styled.div`
  cursor: ${props=> props.isPointer ? "pointer" : "auto"};
  margin-right: 20px;
`

export { 
  ClickableArea,
  HeaderContainer,
  ClickableText
}
