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
import { Container } from '../../globalStyles';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from 'react-router-dom';


const createUserFormSchema = z.object({
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de email inválido'),

    password: z.string()
        .nonempty('A senha é obrigatória')
})

export default function login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createUserFormSchema) })


    async function readUser(data) {

        fetch("http://localhost/bonna_party/src/api/login.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })
            .then(response => response.json())
            .then(json => {

                localStorage.setItem('name', json.name,)
                localStorage.setItem('id', json.id,)
                localStorage.setItem('email', json.email,)

                location.reload()
            })
            .catch(err => console.log(err))

        console.log(data)

    }

    const err = () => {
        const msg = []
        if (errors) {
            for (let i in errors) {
                msg.push(errors[i].message)
            }
        }

        return msg
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

            {errors &&
                <FormMessage
                    variants={messageVariants}
                    initial='hidden'
                    animate='animate'>
                    {err().map((e, ix) => <div key={ix}>{e}</div>)}
                </FormMessage>
            }

        </>


    )
}

{/* <form onSubmit={handleSubmit(readUser)}>

    <label htmlFor="">Email:</label>
    <input type="email" {...register('email')} />
    {errors.email && <span>{errors.email.message}</span>}

    <label htmlFor="">Senha:</label>
    <input type="password"{...register('password')} />
    {errors.password && <span>{errors.password.message}</span>}

    <button type="submit">Login</button>
</form> */}