'use client'


import {
    FormWrapper,
    FormInput,
    FormLabel,
    FormInputRow,
    FormMessage,
    FormButton,
} from './FormStyles';
import { useForm } from 'react-hook-form'
import { createUserFormSchema, err, verify, messageVariants } from '@/utils/validateForms';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';



export default function login() {
    const [status, setStatus] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createUserFormSchema) })



    async function readUser(data) {

        await fetch("http://localhost/bonna_party/src/api/login.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })
            .then(response => response.json())
            .then(json => {
                setStatus(json.message)

                localStorage.setItem('name', json.name,)
                localStorage.setItem('id', json.id,)
                localStorage.setItem('email', json.email,)
        
               // location.reload()
            })
            .catch(err => setStatus(err))



    }

    return (

        <>
            <FormWrapper onSubmit={handleSubmit(readUser)}>
                <FormInputRow>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" {...register('email')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Senha</FormLabel>
                    <FormInput type="password"{...register('password')} />
                </FormInputRow>

                <FormButton type='submit'>Login</FormButton>
            </FormWrapper>

            {verify(errors, status) &&
                <FormMessage
                    variants={messageVariants}
                    initial='hidden'
                    animate='animate'>
                    {err(errors)}
                    {status}
                </FormMessage>
            }

        </>


    )
}
