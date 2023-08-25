'use client'

import { Content, Line, LineTitle } from "@/styles/profileCards.style"
import {
    StyledInputDiv,
    StyledInput,
    StyledLabel,
    StyledSubmit,
    StyledMessage
} from '@/styles/Forms.style'

import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import { changeEmailFormSchema, err, verify } from '@/utils/validateForms';
import { zodResolver } from '@hookform/resolvers/zod'


export default function ChangeEmail() {
    const [localEmail, setLocalEmail] = useState('')
    const [localID, setLocalID] = useState('')
    const [status, setStatus] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(changeEmailFormSchema) })

    useEffect(() => {
        setLocalEmail(localStorage.getItem('email'))
        setLocalID(localStorage.getItem('id'))
    }, [])


 async function sendEmail(data) {
        data = {...data ,id: localID}
        console.log(data)
        await fetch("http://localhost/bonna_party/src/api/changeEmail.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })
            .then(response => response.json())
            .then(json => {
                setStatus(json.message)
                if(json.status === 1 ) {
                    localStorage.setItem('email', json.email)
    
                    location.reload()
                    console.log(json)
                }
            })
            .catch(err => setStatus(err))


    }


    return (
        <Content>
            <Line>
                <LineTitle>
                    Alteração de Email
                </LineTitle>
            </Line>

            <form onSubmit={handleSubmit(sendEmail)}>
                <StyledInputDiv float='initial'>
                    <StyledLabel>Email Atual</StyledLabel>
                    <StyledInput
                        type='email'
                        readOnly
                        value={localEmail}
                    />
                </StyledInputDiv>
                <StyledInputDiv >
                    <StyledLabel>Novo Email</StyledLabel>
                    <StyledInput
                        {...register('email')}
                        type='email'
                    />

                </StyledInputDiv>
                <StyledInputDiv float='right'>
                    <StyledLabel>
                        Confirmação do Novo E-mail
                    </StyledLabel>

                    <StyledInput
                        {...register('confirm_email')}
                        type='email'
                    />

                </StyledInputDiv>
                
                <StyledSubmit type='submit' >GRAVAR NOVO EMAIL</StyledSubmit>

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