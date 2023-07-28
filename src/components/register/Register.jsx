'use client'

import { useState } from "react"
import "./Register.css"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const createUserFormSchema = z.object({
    name: z.string()
        .nonempty('O nome é obrigatório ')
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0]
                .toLocaleUpperCase()
                .concat(word.substring(1))
            }).join(' ')
        })
    ,
    email: z.string()
        .nonempty('O e-mail é obrigatório ')
        .email('Formato de e-mail inválido')
    ,
    password: z.string()
        .min(6, 'A senha precisa de no mínimo 6 caracteres')
    ,
})

export default function login() {
    const [inputs, setInputs] = useState('')

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(createUserFormSchema)
    })

     async function createUser(data) {
        setInputs(JSON.stringify(data, null, 2)) // estudar
        console.log(data)
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit(createUser)}>
                <label htmlFor="">Nome completo:</label>
                <input type="text" name="name" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor="">Email:</label>
                <input type="email" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}


                <label htmlFor="">Senha:</label>
                <input type="password" {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}


                <button type="submit">Registar</button>
            </form>

        </div>
    )
}