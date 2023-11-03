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
import { useState, useEffect } from "react";


export default function ChangePass() {
    const [status, setStatus] = useState('')
    const [localID, setLocalID] = useState('')

    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(changePasswordFormSchema) })

    useEffect(() => {
        setLocalID(localStorage.getItem('id'))
    }, [])


    async function sendPass(data) {
        data = {...data ,id: localID}
        console.log(data)
        await fetch("http://localhost/BonnaParty/src/api/changePassword.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })
            .then(response => response.json())
            .then(json => {
                setStatus(json.message)
                if(json.status === 1 ) {
    
                    console.log(json)
                }
            })
            .catch(err => setStatus(err))


    }

    return (
        <Content>
            <Line>
                <LineTitle>
                    Alteração de Senha
                </LineTitle>
            </Line>

            <form onSubmit={handleSubmit(sendPass)}>
                <StyledInputDiv float='initial'>
                    <StyledLabel>Senha Atual</StyledLabel>
                    <StyledInput
                        type='password'
                        readOnly
                        value='******'

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