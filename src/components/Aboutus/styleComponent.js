import styled from "styled-components";

export const AboutusPageContent = styled.div`
background-color : #111;
height : 100%;
width : 100%;
margin : 0;
`;
//Personal Information 
export const PersonalInfo = styled.div`
    margin : 0px 0px;
    h3 {
        color : #fff; 
        font-size : 26px;
        font-weight : 800;
        margin-bottom : 10px
    }
`;

export const PersonalContainer = styled.div`
`;
export const PersonalDetails = styled.div`
 font-size : 15px;
 foont-weight : 700;
 color : #D0D0D0;
`;

export const DetailBox = styled.div`
border : 1px solid #252525;
border-radius : 5px;
margin : 20px;
padding : 20px 40px 25px 40px;
 h3 {
    color : #ffb400;
    font-size : 50px;
    font-weight : 800;
    margin : 0;
    display : relative;
   
    &:after {
       content: "+";
       position: absolute;
       font-size: 35px;
       font-weight: 700;
       color : #ffb400;
    }
 }
 p {
  position : relative;
  padding-left : 45px;
  color : #fff;
  font-weight : 700px;
  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 12px;
    height: 2px;
    width: 30px;
    border-radius: 10px;
    background-color : #777;
  }
 }
`;


// <--------------------------Experience Section ----------------->


export const ExperienceSection = styled.div`

`;

export const ExperienceHeader = styled.div`
width : 100%;
font-size : 26px;
font-weight : 800;
color : #FFF;
`;

