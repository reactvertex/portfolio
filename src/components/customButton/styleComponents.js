import styled from 'styled-components';

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