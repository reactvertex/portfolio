import styled from 'styled-components';

export const HomeComponent = styled.div`
background-color : #111;
height : 100vh;
width : 100%;
position : relative;
`;

export const PathClip = styled.div`
height: 160%;
width: 100%;
transform: rotate(0deg);
position: absolute;
left: 0%;
top: -60%;
clip-path: polygon(0% 0%, 2.7% 0.8%, 30.8% 100%, 0% 100%);
background : #ffb400;
z-index : 999;
@media(max-width:992px){
  display : none;
}
`;

export const HomeSection = styled.div`
  height : 100vh;
  @media(max-width:992px){
  height : 80vh;

  }
`;

export const UserInfo = styled.div`
@media(max-width:992px){
  align-items : center;
}
`;
export const UserName = styled.div`
position : relative;
padding-left : 70px;
font-weight : 800;
font-size : 60px;
line-height : 70px;
color : #ffb400;
text-transform: uppercase;
a {
  text-decoration : none;
  color :#ffb400;
}
  p{
    color : #fff;
    margin : 10px 0px;
    font-size: 45px;
    line-height : 50px;
    text-transform: capitalize;
  }
&:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 30px;
    height: 5px;
    width: 45px;
    border-radius: 10px;
    background-color : #ffb400;
    @media(max-width:992px){
     height: 5px;
     width: 45px;
     top : 20px;
     left:15px;
    }
  }
  @media(max-width:992px){
    font-size:40px;
    line-height : 45px;
  }
`;

export const ProfileDetails = styled.div`
  font-size : 18px;
  margin : 20px 20px 28px;
  line-height : 25px;
  color : #fff;
  padding-left : 55px;
  @media(max-width:992px){
    font-size: 15px;
    line-height : 22px;
  }
`;

export const AboutButton = styled.button`
border : none;
padding : 15px 10px;
background-color : #111;
border-radius : 40px;
border : 1px solid #ffb400;
width : 230px;
color : #fff;
margin-left : 20px;
font-weight : 800;
padding-left : 55px;
@media(max-width:992px){
  margin-left : 0px;
}
&:hover {
    color : #ffb400;
    background-color : #fff;
    border : none;
    svg {
        fill : #ffb400;
    }
  }
`;