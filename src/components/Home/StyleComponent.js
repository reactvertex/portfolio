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
`;

export const HomeSection = styled.div`
  height : 100vh;
`;

export const UserName = styled.div`
position : relative;
padding-left : 70px;
font-weight : 800;
font-size : 60px;
line-height : 62px;
color : #ffb400;
span  {
    color : #fff;
    margin : 10px 0px;
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
  }
`;

export const ProfileDetails = styled.div`
  font-size : 16px;
  margin : 20px 20px 28px;
  line-height : 25px;
  color : #fff;
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
&:hover {
    color : #ffb400;
    background-color : #fff;
    border : none;
    svg {
        fill : #ffb400;
    }
  }
`;