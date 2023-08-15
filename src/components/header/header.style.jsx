import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: transparent;
    height:80px;
    display: flex;
    justify-content:space-between;
    padding: 0 10px;

    &:hover {
        background-color:#fff;
        transition: ease-in-out;
    }

`

export const StyledNav = styled.ul`
  
  display:flex;
        list-style: none;
        align-items: center;
    li{
        margin-left: ${ (prop) => prop.ml ? prop.ml : '15px'}
    }
    a {
        text-decoration: none;
        color:#000;
        font-size: 0.9em
    }



`

export const LinksNav = styled.div`
        display:flex;
        list-style: none;
        align-items: center; 
`

export const ImageDiv = styled.div`
    position:absolute;
    width: 100vw;
    height:80px;
    top: 0;
    right:0;

    display:flex;
    align-items:center;
`