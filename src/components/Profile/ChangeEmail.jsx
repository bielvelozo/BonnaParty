'use client'

import { Content, Line, LineTitle } from "@/styles/profileCards.style"
import { StyledInputDiv, StyledInput, StyledLabel, StyledSubmit } from '@/styles/Forms.style'
import { useEffect, useState } from "react"

export default function ChangeEmail() {
    const [localEmail, setLocalEmail] = useState('')
    useEffect(() => {
        setLocalEmail(localStorage.getItem('email'))
    }, [])
    console.log(localEmail)
    return (
        <Content>
            <Line>
                <LineTitle>
                    Alteração de Email
                </LineTitle>
            </Line>

            <StyledInputDiv float='initial'>
                <StyledLabel>Novo Email</StyledLabel>
                <StyledInput
                    type='email'
                    readOnly
                    value={localEmail}
                />
            </StyledInputDiv>
            <StyledInputDiv >
                <StyledLabel>Email Atual</StyledLabel>
                <StyledInput
                    type='email'
                />

            </StyledInputDiv>
            <StyledInputDiv float='right'>
                <StyledLabel>
                    Confirmação do Novo E-mail
                </StyledLabel>
                <StyledInput
                    type='email'
                />

            </StyledInputDiv>
            <StyledSubmit>GRAVAR NOVO EMAIL</StyledSubmit>
        </Content>
    )
}