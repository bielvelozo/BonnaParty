import styled from "styled-components";
import Link from 'next/link'

export const DivCards = styled.div`
    background: #fff;
    width: 100%;
    display: block;
    float: left;
    clear: both;
    padding-top: 2em;
    padding-bottom: 2em;
    margin-top: 0;
    box-sizing: border-box;
`

export const Center = styled.div`
    float: none;
    display: block;
    min-height: 700px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    position:relative;
    
`

export const TitleCard = styled.div`
    width: 25%;
    margin-right: 15px;
    position: relative;
    display: inline-block;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 0;
    display: block!important;
    font-size: 14px;
    color: #999;
    font-weight: 700;
    line-height: 55px;
    text-indent: 25px;
    text-align: left;
`

export const Card = styled(Link)`
    display: flex;
    position: relative;
    padding: 15px 10px 15px 60px;
    border:${props => props.color ? `1px solid ${props.color}` : '1px solid #e5e5e5;'};
    line-height: 20px;
    font-size: 13px;
    font-weight: 400;
    text-decoration: none;
    text-transform: none;
    color: ${props => props.color ? props.color : '#999'};

    &:hover {
        background: #f5f5f5;
    }

`

export const UlCards = styled.ul`
    background: #fff;
    width: 25%;
    display: block;
    float: left;
    list-style: none;
    margin: 0;
    padding: 12px 0 0;
    `

export const LiCards = styled.li`
    height: auto!important;
    margin-bottom: 10px;
    border: none;
    line-height: normal;
    cursor: pointer!important;

    `

export const IconLink = styled.i`
    background: #f8f8f8;
    width: 30px;
    height: 30px;
    position: absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 0;
    left: 0;
    padding: 25px;
    border-right: solid 1px #e5e5e5;
`

export const Content = styled.div`
    width: 100%;
    max-width: 70%;
    float: right;
    `

export const Line = styled.div`
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 20px;
    color: #000;
    margin-bottom: 1.4em;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
`

export const LineTitle = styled.h3`
    padding: 0;
    font-size: 1.375rem;
    font-weight: 700;
`