import styled from 'styled-components';

export const AboutButton = styled.button`
border : none;
padding : 15px 10px;
background-color : #111;
border-radius : 40px;
border : 1px solid #ffb400;
width : 230px;
color : #fff;
margin-left : ${props => props.marginLeft} ;
font-weight : 800;
display : flex;
justify-content : space-around;
align-items : center;
div{
  padding-left : 5px;
}
&:hover {
    color : #ffb400;
    background-color : #fff;
    border : none;
    svg {
        fill : #ffb400;
    }
  }
  @media(max-width:992px){
    margin-left : 0px;
  }
`;