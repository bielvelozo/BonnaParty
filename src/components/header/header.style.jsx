import styled from 'styled-components';

export const StyledHeader = styled.div`
    background-color: transparent;
    height:80px;
    display: flex;
    justify-content:space-between;
    padding: 0 10px;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color:#fff;
        box-shadow: 5px 0px 20px black ;
    }

`
export const StyledLi = styled.li`
    cursor:pointer
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