import styled from 'styled-components'

export const EventContainer = styled.div`
    width:100%;
    padding: 3rem 0;
    display:grid;
    grid-template-columns: 2fr 1fr;
    align-items:center;

    gap:1rem;


    @media(max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap:2rem;
    }
`

export const EventContent = styled.div`
    display:flex;
    flex-direction: column;
    gap:1rem;

`

export const Infos = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.3rem
`

export const EventImage = styled.div`
    
    height: auto;
    width:600px;
    border:1px dashed #9c9c9c; 
    border-radius: 4px;

    @media(max-width:768px) {
        width:100%;
        height:auto;
    }
`