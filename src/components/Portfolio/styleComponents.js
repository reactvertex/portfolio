import styled from "styled-components";

export const PortfolioPageContent = styled.div`
`;

export const PortfolioContent = styled.div`
background-color : #111;
height : 100vw;
width : 100%;
margin : 0;
`;

export const ProHeader = styled.div`
 
  
`;

export const HeaderContent = styled.div`
margin: 20px 15px 15px;
font-size: 20px;
color : ${props => props.textColor};
cursor: pointer;
text-transform: uppercase;

`;

export const ProjectDetails = styled.div`
 display : flex;
 justify-content : center;
`;

export const ProjectContent =styled.img`
cursor : pointer;
border-radius : 10px;
height :200px; 
width : 350px;
`;
export const HoverContent = styled.div`
   background-color : #ffb400;
   z-index : 999;
   border-radius : 10px;
   height :200px; 
   width : 350px;
   opacity : .9;
   font-size : 22px;
   font-weight : 600;
   color : #fff;
   cursor : pointer;
`;
