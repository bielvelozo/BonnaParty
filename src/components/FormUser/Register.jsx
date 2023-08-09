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
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"


const createUserFormSchema = z.object({
    name: z.string()
        .nonempty('O nome é obrigatório ')
        .min(3, 'O nome de usuário precisa ter no mínimo 3 caracteres')
    ,
    email: z.string()
        .nonempty('O e-mail é obrigatório ')
        .email('Formato de e-mail inválido')
    ,
    password: z.string()
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    ,
})

export default function register() {
    const [status, setStatus] = useState('')


    const verify = () => {
        let test = false

        if (Object.keys(errors).length !== 0 || status !== '') {
            test = true
        }

        return test
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createUserFormSchema) })

    async function createUser(data) {

        await fetch("http://localhost/bonna_party/src/api/register.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => setStatus(json.message))
            .catch(err => setStatus(err))

    }

    const err = () => {
        const msg = []
        for (let i in errors) {
            msg.push(errors[i].message)
        }

        return msg[0]
    }



    const messageVariants = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };


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


            {verify() &&
                <FormMessage
                    variants={messageVariants}
                    initial='hidden'
                    animate='animate'>
                    {err()}
                    {status}
                </FormMessage>
            }


        </>

    )
}
