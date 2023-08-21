import styled from 'styled-components'

export const StyledInput = styled.input`
    height: 40px;
    width:100%;
    padding: 0 10px;
    font-size: .75rem;
    font-weight: 400;
    color: #5f5f5f;
    border: 1px solid #dcdcdc;
    outline:0;
`

export const StyledInputDiv = styled.div`
    display: block;
    clear: none;
    float: ${(props) => props.float ? props.float : 'left'};
    min-height: 90px;
    width: 50%;
    margin-bottom: 0.5em;
    padding-right: 1em;
`

export const StyledLabel = styled.div`
    display: block;
    float: none;
    font-family: 'Open Sans',Arial,Helvetica,sans-serif;
    font-size: 14px;
    color: #102133;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 8px;
    text-align: left;
    text-transform: none;
    width: 100%;

`