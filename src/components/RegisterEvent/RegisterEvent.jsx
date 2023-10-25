"use client";

import {
  FormWrapper,
  FormInput,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
} from "./FormStyles";

import { useForm } from "react-hook-form";
import {
  verify,
  err,
  messageVariants,
  createEventFormSchema,
  createUserFormSchema,
} from "@/utils/validateForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

export default function register() {
  const [status, setStatus] = useState("");


  useEffect(() => {
    localStorage.getItem("id") > 0 === false && location.replace('/')
}, [])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createEventFormSchema) });

  async function createEvent(data) {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    
    const idData = {...data , userID: localStorage.getItem("id"), image:data.image[0].name}
    console.log(idData);
    
    //upload image
    await fetch("http://localhost/bonna_party/src/api/upload.php", {
      method: "POST",
      body: formData,
      headers: { enctype: "multipart/form-data" },
    })
      .then((response) => console.log(response))
      // .then(json => console.log(json.message))
      .catch((err) => console.log(err));

      //Cadastar evento

    await fetch("http://localhost/bonna_party/src/api/registerEvent.php", {
      method: "POST",
      body: JSON.stringify(idData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setStatus(json.message))
      .catch((err) => setStatus(err));

      function handlePhone(event) {
        let input = event.target
        input.value = phoneMask(input.value)
      }
      
      const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
      }
  }

      
      return (
        
        

    <>
      <FormWrapper onSubmit={handleSubmit(createEvent)}>
        <FormInputRow>
          <FormLabel>Nome do Evento</FormLabel>
          <FormInput type="text" {...register("name")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Descrição</FormLabel>
          <textarea type="text" {...register("description")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Estado</FormLabel>
          <FormInput type="text" {...register("state")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Cidade</FormLabel>
          <FormInput type="text" {...register("city")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Endereço</FormLabel>
          <FormInput type="text" {...register("address")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Data e Horário</FormLabel>
          <FormInput type="datetime-local" {...register("dateAndHour")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Contato</FormLabel>
          <FormInput type="tel" maxlength="15" onkeyup={ handlePhone()} {...register("mobile")} />
        </FormInputRow>
        <FormInputRow>
          <FormLabel>Imagem do Evento</FormLabel>
          <FormInput type="file" {...register("image")} />
        </FormInputRow>
        <FormButton type="submit">Cadastrar Evento</FormButton>
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

      {verify(errors, status) && (
        <FormMessage
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {err(errors)}
          {status}
        </FormMessage>
      )}
    </>
  );
}
