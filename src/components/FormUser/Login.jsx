'use client'


import {
    FormColumn,
    FormWrapper,
    FormInput,
    FormSection,
    FormRow,
    FormLabel,
    FormInputRow,
    FormMessage,
    FormButton,
    FormTitle,
} from './FormStyles';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'react-router-dom';
import { useState } from 'react';


const createUserFormSchema = z.object({
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de email inválido'),

    password: z.string()
        .nonempty('A senha é obrigatória')
})

export default function login() {
    const [status, setStatus] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createUserFormSchema) })

    const verify = () => {
        let test = false

        if (Object.keys(errors).length !== 0 || status !== '') {
            test = true
        }

        return test
    }


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

            location.reload()
        })
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
