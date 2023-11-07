"use client";

import {
  FormWrapper,
  FormInput,
  // FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
} from "./FormStyles";
import {
  Input,
  InputLabel,
  FormControl,
  TextField,
  FormLabel,
  TextareaAutosize,
  Autocomplete,
  Button,
} from "@mui/material";

import { useForm } from "react-hook-form";
import {
  verify,
  err,
  messageVariants,
  createEventFormSchema,
} from "@/utils/validateForms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

export default function register() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    localStorage.getItem("id") > 0 === false && location.replace("/");
  }, []);

  const states = [
    { uf: "AC", label: "Acre" },
    { uf: "AL", label: "Alagoas" },
    { uf: "AP", label: "Amapá" },
    { uf: "AM", label: "Amazonas" },
    { uf: "BA", label: "Bahia" },
    { uf: "CE", label: "Ceará" },
    { uf: "DF", label: "Distrito Federal" },
    { uf: "ES", label: "Espirito Santo" },
    { uf: "GO", label: "Goiás" },
    { uf: "MA", label: "Maranhão" },
    { uf: "MS", label: "Mato Grosso do Sul" },
    { uf: "MT", label: "Mato Grosso" },
    { uf: "MG", label: "Minas Gerais" },
    { uf: "PA", label: "Pará" },
    { uf: "PB", label: "Paraíba" },
    { uf: "PR", label: "Paraná" },
    { uf: "PE", label: "Pernambuco" },
    { uf: "PI", label: "Piauí" },
    { uf: "RJ", label: "Rio de Janeiro" },
    { uf: "RN", label: "Rio Grande do Norte" },
    { uf: "RS", label: "Rio Grande do Sul" },
    { uf: "RO", label: "Rondônia" },
    { uf: "RR", label: "Roraima" },
    { uf: "SC", label: "Santa Catarina" },
    { uf: "SP", label: "São Paulo" },
    { uf: "SE", label: "Sergipe" },
    { uf: "TO", label: "Tocantins" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createEventFormSchema) });

  async function createEvent(data) {

    const imageFile = data.image[0];
    const timestamp = new Date().getTime();
    const fileExtension = imageFile.name.split(".").pop();
    const newFileName = `img_${timestamp}.${fileExtension}`;

    const newFile = new File([imageFile], newFileName, { type: imageFile.type });

    console.log(newFile);

    const formData = new FormData();
    formData.append("image", newFile);


    const idData = {
      ...data,
      userID: localStorage.getItem("id"),
      image: newFileName,
    };
    console.log(idData);

    // upload image
    await fetch("http://localhost/BonnaParty/src/api/upload.php", {
      method: "POST",
      body: formData,
      headers: { enctype: "multipart/form-data" },
    })
      .then((response) => console.log(response))
      // .then(json => console.log(json.message))
      .catch((err) => console.log(err));

    // Cadastar evento

    await fetch("http://localhost/BonnaParty/src/api/registerEvent.php", {
      method: "POST",
      body: JSON.stringify(idData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setStatus(json.message))
      .catch((err) => setStatus(err));
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(createEvent)}>
        <FormControl>
          <TextField
            type="text"
            variant="outlined"
            label="Nome do Evento"
            {...register("name")}
          />
        </FormControl>
        <FormControl>
          <TextField
            placeholder="Descreva o seu evento"
            multiline
            rows={2}
            // maxRows={4}
            label="Descrição"
            {...register("description")}
          />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Cep" {...register("cep")} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Rua" {...register("street")} />
        </FormControl>
        <FormControl>
          <TextField type="number" label="Número" {...register("number")} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Bairro" {...register("hood")} />
        </FormControl>
        <FormControl>
          <TextField type="text" label="Cidade" {...register("city")} />
        </FormControl>
        <FormControl>
          <Autocomplete
            disablePortal
            options={states}
            sx={{ width: {lg: 300 , md: 200} }}
            renderInput={(params) => (
              <TextField {...params} label="Estado" {...register("state")} />
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Data e Horário</FormLabel>
          <TextField type="datetime-local" {...register("dateAndHour")} />
        </FormControl>
        <FormControl>
          <TextField
            label="Contato"
            type="tel"
            maxlength="15"
            // onkeyup={(e) => handlePhone(e)}
            {...register("mobile")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Imagem do Evento</FormLabel>
          <TextField type="file" {...register("image")} />
        </FormControl>
        <FormButton type="submit">Cadastrar Evento</FormButton>
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
      </FormWrapper>
    </>
  );
}
