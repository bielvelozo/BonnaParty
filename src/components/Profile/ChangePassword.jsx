'use client'

import { Content, Line, LineTitle } from "@/styles/profileCards.style"
import { StyledInputDiv, StyledInput, StyledLabel, StyledSubmit } from '@/styles/Forms.style'
import { useEffect, useState } from "react"

export default function ChangePass() {
  

    return (
        <Content>
            <Line>
                <LineTitle>
                    Alteração de Senha
                </LineTitle>
            </Line>

            <StyledInputDiv float='initial'>
                <StyledLabel>Senha Atual</StyledLabel>
                <StyledInput
                    type='password'
                    readOnly

                />
            </StyledInputDiv>
            <StyledInputDiv >
                <StyledLabel>Nova Senha</StyledLabel>
                <StyledInput
                    type='password'
                />

            </StyledInputDiv>
            <StyledInputDiv float='right'>
                <StyledLabel>
                    Confirmação da Nova Senha
                </StyledLabel>
                <StyledInput
                    type='password'
                />

            </StyledInputDiv>
            <StyledSubmit>GRAVAR NOVA SENHA</StyledSubmit>
        </Content>
    )
}