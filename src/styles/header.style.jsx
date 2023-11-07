import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: transparent;

  width: 100%;
  /* height: 80px; */
  padding: 0 10px;

  /* position:absolute;
    top:0;
    left: 0; */

  /* 
    box-shadow: inset 0px 22px 28px -7px rgba(0,0,0,0.52);
    transition: ease-in-out 0.3s; */

  &:hover {
    background-color: #fff;
    box-shadow: 5px 0px 20px black;
  }
`;

export const HeaderImage = styled.div `

img {
    
    width: 80px;
    height: auto;
    
    @media(max-width:620px) {
        width:60px
    }
    }
    `

export const HeaderWrap = styled.div`
  width: 100%;
  height:100%;

  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const SympleStyledHeader = styled.div`
  background-color: #000;

  width: 100%;
  height: 80px;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;

  transition: ease-in-out 0.3s;
`;

export const StyledLi = styled.li`
  cursor: pointer;
`;

export const StyledNav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  li {
    margin-left: ${(prop) => (prop.ml ? prop.ml : "15px")};
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 0.9em;
  }
`;

export const LinksNav = styled.div`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const ImageDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 80px;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
`;
