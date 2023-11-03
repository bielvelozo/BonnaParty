import { z } from "zod";
export const createUserFormSchema = z.object({
  name: z
    .string()
    .nonempty("O nome é obrigatório ")
    .min(3, "O nome de usuário precisa ter no mínimo 3 caracteres")
    .regex(/^[A-Za-z]+$/i, "Apenas letras são permitidas")
    .optional(),

  email: z
    .string()
    .nonempty("O e-mail é obrigatório ")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .nonempty("A senha é obrigatória")
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

export const changeEmailFormSchema = z
  .object({
    email: z
      .string()
      .nonempty("O e-mail é obrigatório ")
      .email("Formato de e-mail inválido"),
    confirm_email: z
      .string()
      .nonempty("A confirmação é obrigatória ")
      .email("Formato de e-mail inválido"),
  })

  .refine(({ email, confirm_email }) => email === confirm_email, {
    message: "Os email devem ser iguais",
    path: ["confirm_email"],
  });

export const changePasswordFormSchema = z
  .object({
    password: z
      .string()
      .nonempty("Informe a nova senha")
      .min(6, "A senha deve ter no mínimo 6 caracteres"),

    confirm_password: z.string().nonempty("Informe a confimação da senha"),
  })

  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: "As senhas digitadas devem ser idênticas.",
    path: ["confirm_password"],
  });

export const createEventFormSchema = z.object({
  // name: z
  //   .string()
  //   .nonempty("O nome é obrigatório ")
  //   .min(3, "O nome de usuário precisa ter no mínimo 3 caracteres")
  //   .regex(/^[A-Za-z]+$/i, "Apenas letras são permitidas")
  //   .optional(),

  //   email: z
  //   .string()
  //   .nonempty("O e-mail é obrigatório ")
  //   .email("Formato de e-mail inválido"),

  // password: z
  //   .string()
  //   .nonempty("A senha é obrigatória")
  //   .min(6, "A senha precisa ter no mínimo 6 caracteres"),

  name: z.string().nonempty("O nome do evento é obrigatório "),

  description: z
    .string()
    .nonempty(
      "Escreva uma breve descrição para que as pessoas possam conhecer mais sobre seu evento!"
    )
    .max(200, "A descriçao deve ter no máximo 200 letras"),

  cep: z.string().nonempty("O número de cep é obrigatório"),

  street: z.string().nonempty("A rua é obrigatória"),

  number: z.string().nonempty("O número é obrigatório"),

  hood: z.string().nonempty("O bairro é obrigatório"),

  state: z.string().nonempty("O estado é obrigatório "),

  city: z.string().nonempty("A cidade é obrigatória "),

  dateAndHour: z.string().nonempty("A data e o horário são obrigatórios"),
  // .datetime({ message: "Data e hora inválidos. Devem ser no formato UTC." }),
  mobile: z.string().nonempty("O número para contato é obrigatório"),

  // .("O número para contato é obrigatório"),
  image: z.any(),
});

export const verify = (errors, status) => {
  let test = false;

  if (Object.keys(errors).length !== 0 || status !== "") {
    test = true;
  }

  return test;
};

export const err = (errors) => {
  const msg = [];

  for (let i in errors) {
    msg.push(errors[i].message);
  }

  return msg[0];
};

export const messageVariants = {
  hidden: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
};
