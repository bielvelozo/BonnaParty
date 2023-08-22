import { z } from 'zod'
export const createUserFormSchema = z.object({
    name: z.string()
        .nonempty('O nome é obrigatório ')
        .min(3, 'O nome de usuário precisa ter no mínimo 3 caracteres')
        .optional()
    ,
    email: z.string()
        .nonempty('O e-mail é obrigatório ')
        .email('Formato de e-mail inválido')
    ,
    password: z.string()
        .nonempty('A senha é obrigatória')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    ,
})

 export const verify = ( errors ,status ) => {
    let test = false

    if (Object.keys(errors).length !== 0 || status !== '') {
        test = true
    }

    return test
}

export const err = (errors) => {
    const msg = []
    for (let i in errors) {
        msg.push(errors[i].message)
    }

    return msg[0]
}

export const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
};