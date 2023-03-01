import styled from "styled-components";

export const NavbarContainer = styled.div`
flex-direction : column;
display : ${props => props.display};
position : fixed;
width: 100%x; 
height : 100vh;
@media(max-width:426px){
  flex-direction : row;
  bottom : 0px;
  height : 10vh;
  width : 100vw;
  background-color : #000;
}
`;

export const NavItems = styled.div`
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
cursor : pointer;
border-radius : 50%;
background-color : ${props => props.bgcolor};
margin : 10px 20px;
display : flex; 
@media(max-width:426px){
  margin : 15px 10px; 
} 
   &:hover {
    background-color : #ffb400;

  }
`;

export const NavIcon = styled.div`

`;

export const NavLabel = styled.div`

`;
