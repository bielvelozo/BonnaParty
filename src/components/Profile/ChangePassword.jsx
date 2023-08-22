'use client'

import { Content, Line, LineTitle } from "@/styles/profileCards.style"
import {
    StyledInputDiv,
    StyledInput,
    StyledLabel,
    StyledSubmit,
    StyledMessage
} from '@/styles/Forms.style'
import { useForm } from 'react-hook-form'
import { changePasswordFormSchema, err, verify } from '@/utils/validateForms';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";


export default function ChangePass() {
    const [status, setStatus] = useState('')
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(changePasswordFormSchema) })


    return (
        <Content>
            <Line>
                <LineTitle>
                    Alteração de Senha
                </LineTitle>
            </Line>

            <form onSubmit={handleSubmit()}>
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
                        {...register('password')}

                    />

                </StyledInputDiv>
                <StyledInputDiv float='right'>
                    <StyledLabel>
                        Confirmação da Nova Senha
                    </StyledLabel>
                    <StyledInput
                        type='password'
                        {...register('confirm_password')}
                    />

                </StyledInputDiv>
                <StyledSubmit>GRAVAR NOVA SENHA</StyledSubmit>

                {verify(errors, status) &&
                    <StyledMessage>
                        {err(errors)}
                        {status}
                    </StyledMessage>
                }
            </form>
        </Content>
    )
}