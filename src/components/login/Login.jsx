'use client'


import '../register/Register.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from "next/router"



const createLoginFormSchema = z.object({
    email: z.string()
        .nonempty('O email é obrigatório')
        .email('Formato de email inválido'),

    password: z.string()
        .nonempty('A senha é obrigatória')
})

export default function login() {
    const [user , setUser] = useState()
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm( zodResolver(createLoginFormSchema) )


    async function readUser(data) {
    
           fetch("http://localhost/bonna_party/src/api/login.php", {
               method:'POST',
               body: JSON.stringify(data),
               headers: {"Content-type": "application/json; charset=UTF-8"}
   
           })
               .then(response => response.json())
               .then(json => {
                    setTimeout(function(){
                        router.push('/loged')
                    }, 50000)
                    setUser(json)
               })
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

            <pre>{user}</pre>

        </div>
    )
}