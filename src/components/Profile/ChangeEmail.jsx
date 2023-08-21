'use client'

import { Content, Line, LineTitle } from "@/styles/profileCards.style"
import { StyledInputDiv, StyledInput, StyledLabel } from '@/styles/Forms.style'

export default function ChangeEmail() {
    return (
        <Content>
            <Line>
                <LineTitle>
                    Mudar Email
                </LineTitle>
            </Line>

            <StyledInputDiv>
                <StyledLabel>Novo Email</StyledLabel>
                <StyledInput
                    type='text'
                    name='EmailAtual'
                    value={localStorage.getItem('email')}
                />
            </StyledInputDiv>
            <StyledInputDiv float='initial'>
                <StyledLabel>Email Atual</StyledLabel>
                <StyledInput
                    type='text'
                    name='EmailAtual'
                    readOnly
                    value={localStorage.getItem('email')}
                />
            </StyledInputDiv>
        </Content>
    )
}