import styled from "styled-components";

export const TitleSection = styled.div`
width : 100%;
display : flex;
justify-content : center;
background-color : #111;
padding : 30px 0px;
h1 {
    text-align : center;
    font-size : 56px;
    font-weight : 900;
    color : #fff;
    line-height : 1.5;
    span{
     color : #ffb400;
    }
}
`;

export const Title = styled.span`
font-size: 120px;
letter-spacing: 10px;
line-height: .7;
position: absolute;
text-transform: uppercase;
font-weight: 800;
-webkit-transform: translateY(-50% ,-50%);
transform: translateY(-50%, -50%);
color: hsla(0,0%,100%,.07);
`;