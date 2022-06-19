import styled from "styled-components";

export const TitleSection = styled.div`
width : 100%;
margin : 0 auto;
position : relative;
background-color : #111;
padding : 80px 0px;
h1 {
    text-align : center;
    font-size : 56px;
    font-weight : 900;
    color : #fff;
    span{
     color : #ffb400;
    }
}
`;

export const Title = styled.span`
font-size: 110px;
letter-spacing: 10px;
line-height: .7;
position: absolute;
right: 30%;
top: 30%;
text-transform: uppercase;
font-weight: 800;
-webkit-transform: translateY(-50% ,-50%);
transform: translateY(-50%, -50%);
color: hsla(0,0%,100%,.07);
`;