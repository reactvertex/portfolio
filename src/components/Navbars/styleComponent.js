import styled from "styled-components";

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
   &:hover {
    background-color : #ffb400;

  }
`;

export const NavIcon = styled.div`

`;

export const NavLabel = styled.div`

`;
