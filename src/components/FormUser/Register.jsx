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
import {createUserFormSchema , verify ,err , messageVariants} from '@/utils/validateForms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"




export default function register() {
    const [status, setStatus] = useState('')




    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createUserFormSchema) })

    async function createUser(data) {

        await fetch("http://localhost/BonnaParty/src/api/register.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => setStatus(json.message))
            .catch(err => setStatus(err))

    }





    return (

        <>

            <FormWrapper onSubmit={handleSubmit(createUser)}>
                <FormInputRow>
                    <FormLabel>Nome de Usuário</FormLabel>
                    <FormInput type="name" {...register('name')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email"{...register('email')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Senha</FormLabel>
                    <FormInput type="password"{...register('password')} />
                </FormInputRow>

                <FormButton type='submit'>Cadastrar</FormButton>
            </FormWrapper>


            {verify(errors , status) &&
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
