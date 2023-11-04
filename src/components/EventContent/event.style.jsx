import styled from 'styled-components'

export const EventContainer = styled.div`
    width:100%;
    padding: 3rem 0;
    display: flex;
    
    justify-content:space-between;
    align-items:center;

    gap:1rem;


    @media(max-width:768px) {
        flex-direction: column;
        text-align:center;
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
    border:2px dashed #9c9c9c; 

    @media(max-width:768px) {
        width:100%;
        height:auto;
    }
`