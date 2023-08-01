'use client'
import '../register/Register.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const createLoginFormSchema = z.object({
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
    } = useForm( zodResolver(createLoginFormSchema) )

     async function readUser(data) {
        fetch("http://localhost/bonna_party/src/api/register.php", {
            method:'GET',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}

        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(readUser)}>

                <label htmlFor="">Email:</label>
                <input type="email" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="">Senha:</label>
                <input type="password"{...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}

                <button type="submit">Login</button>
            </form>

        </div>
    )
}