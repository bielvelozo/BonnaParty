import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: #f2f2f2;
    border-top: 1px solid #d2d2d2;
    border-bottom: 1px solid #d2d2d2;
    padding-top: 38px;
    padding-bottom: 30px;
    /* margin: 0px 0px 0px 0px !important; */
    @media(max-width: 768px) {
        display:none;
    }
`


export const FooterIconContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    text-align:center;
    width: 300px;
    font-size: 24px;
    margin-top: 20px;
    svg {
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-3px);
        }
    }

    .icons {
        display:flex;
        width:100%;
        justify-content:start;
        gap: 40px;
        margin-top: 10px;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    padding: 0 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
`