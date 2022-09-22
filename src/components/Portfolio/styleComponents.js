import styled from "styled-components";

export const PortfolioPageContent = styled.div`

`;

export const PortfolioContent = styled.div`
background-color : #111;
height : 100%;
width : 100vw;
margin : 0;
`;

export const ProHeader = styled.div`
    margin-right : 120px;
    @media(max-width: 480px){
        margin-right : 0px;
 
    }
`;

export const HeaderContent = styled.div`
margin: 20px 15px 15px;
font-size: 20px;
color : ${props => props.textColor};
cursor: pointer;
text-transform: uppercase;
@media(max-width: 480px){
    font-size : 14px;
}

`;

export const ProjectContainer = styled.div`
 margin : 0px 120px;
 @media(max-width: 480px){
    margin : 0px 80px;

 }
`;

export const ProjectDetails = styled.div`
 display : flex;
 justify-content : center;
 flex-wrap : wrap;
`;

export const ProjectContent =styled.img`
cursor : pointer;
border-radius : 10px;
height :200px; 
width : 350px;
@media(max-width:480px){
    height :200px; 
    width : 200px;
  }
`;
export const HoverContent = styled.div`
   background-color : #ffb400;
   border-radius : 10px;
   height :200px; 
   width : 350px;
   opacity : .9;
   font-size : 22px;
   font-weight : 600;
   color : #fff;
   cursor : pointer;
   @media(max-width: 480px){
    height :200px; 
    width : 200px;
  }
`;
