import styled from "styled-components";

export const AboutusPageContent = styled.div`
background-color : #111;
height : 100%;
width : 100%;
margin : 0;
@media(max-width:992px){
  margin-bottom :   60px;
}
`;
//Personal Information 
export const PersonalInfo = styled.div`
    margin : 0px 0px;
    h3 {
        color : #fff; 
        font-size : 26px;
        font-weight : 800;
        margin-bottom : 10px;
        @media(max-width:992px){
          text-align : center;
        }
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
   margin : 0px 60px;
  .experience {
    margin : 0px 0px 60px 0px;
  }
 @media(max-width:992px){
    margin : 0px 20px
  }
`;

export const ExperienceHeader = styled.div`
width : 100%;
font-size : 26px;
font-weight : 800;
color : #FFF;

`;

export const IconSection = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  background-color : #ffb400;
  i{
    text-align : center;
    &:before {
      content: "\f0b1";
      position: absolute;
      font-size: 22px;
      font-weight: 700;
      left: 50%;
      top : 50%;
      transform: translate(-50%, -50%);
      color : #fff;
    }
  }
 
`;

export const ExpDetailBox = styled.div`

`;

export const YearLabel = styled.div`
color: #fff;
font-size: 12px;
padding: 4px 10px;
border-radius: 20px;
margin-top : 12px;
font-weight: 600;
background-color: #252525;
opacity: .8;
width : 120px;
`;
export const DetailSection = styled.div`
  margin-left : 20px;
`;

export const JobTitle = styled.div`
  font-size: 18px;
  margin: 7px 0 10px;
  font-weight : 500;
  line-height : 1.2;
  color : #fff;
  margin-top : 15px;
  span {
    font-size : 20px;
    font-weight : 600;
    opacity: .6;
  }
`;
export const JobDetails = styled.div`
font-size : 14px;
color : #eee;
`;