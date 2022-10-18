import styled from "styled-components";

export const ContactContent = styled.div`
background-color : #111;
height : 100%;
width : 100%;
margin : 0;
`;

export const ContactHeading = styled.div`
 color : #fff;
 font-size : 26px;
 font-weight : 600;
 @media(max-width:992px){
 text-align : center;
}
`;

export const ContanctWrapper = styled.div`
width : 70%;
@media(max-width:992px){
  width : 90%;
}

`;
export const ContactDescription = styled.div`
 color : #fff;
`;

export const UserDetailsIcon = styled.div`
  i  {
    color : #ffb400;
    font-size : 39px;
  }
`;
export const UserDetailsHeading = styled.div`
  color : #fff;
  font-weight : 600;
  text-transform : uppercase;
  opacity : .6;
`;

export const UserDetailsDetails = styled.div`
color : #fff;
font-weight : 700;
`;
 
export const EmailBox = styled.div`
@media(max-width:992px){
  padding : 0;
  padding-top : 20px;
 }
`;

export const FormSubmitButton = styled.div`
@media(max-width:992px){
 margin-bottom : 70px;
 }
`;

export const UserDetailsContainer = styled.div`
 padding-left : 3rem;
 padding-right : 3rem;
 @media(max-width:992px){
  padding-right : 0;
  }
`;

export const FormContainerWrapper = styled.div`
 height : 100vh;
 @media(max-width:992px){
  height : auto;
  padding : 30px 0px;
  }
`;