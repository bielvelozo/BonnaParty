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
import { verify ,err , messageVariants, createEventFormSchema, createUserFormSchema} from '@/utils/validateForms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react"




export default function register() {
    const [status, setStatus] = useState('')
   



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(createEventFormSchema) })

    async function createEvent(data) {
        const formData = new FormData()
        formData.append('image' , data.image[0])

        console.log(data)
        await fetch("http://localhost/bonna_party/src/api/upload.php", {
            method: 'POST',
            body: formData,
            headers: { "enctype": "multipart/form-data" }
        })
            .then(response => console.log(response))
            // .then(json => console.log(json.message))
            .catch(err => console.log(err))

    }





    return (

        <>

            <FormWrapper onSubmit={handleSubmit(createEvent)}>
                <FormInputRow>
                    <FormLabel>Nome do Evento</FormLabel>
                    <FormInput type="text" {...register('name')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Descrição</FormLabel>
                    <textarea type="text" {...register('description')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Estado</FormLabel>
                    <FormInput type="text"{...register('state')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Cidade</FormLabel>
                    <FormInput type="text"{...register('city')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Endereço</FormLabel>
                    <FormInput type="text"{...register('address')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Data e Horário</FormLabel>
                    <FormInput type="datetime-local"{...register('dateAndHour')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Contato</FormLabel>
                    <FormInput type='number' {...register('mobile')} />
                </FormInputRow>
                <FormInputRow>
                    <FormLabel>Imagem do Evento</FormLabel>
                    <FormInput type="file" {...register('image')}  />
                </FormInputRow>
                <FormButton type='submit'>Cadastrar Evento</FormButton>
            </FormWrapper>

            {/* <FormWrapper onSubmit={handleSubmit(createEvent)}>
                <FormInputRow>
                    <FormLabel>Nome de Evento</FormLabel>
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
            </FormWrapper> */}


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
