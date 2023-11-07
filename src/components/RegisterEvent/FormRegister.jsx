"use client";

import {
  FormColumn,
  FormSection,
  FormRow,
  FormTitle,
  FormSwitch,
  CLoseButton,
  RegisterContainer,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import Register from "./RegisterEvent";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function FormRegister({ show, set }) {
  return (
    <RegisterContainer>
      <Typography style={{textAlign:'center' , marginBottom:50}} variant="h3" component={"h1"}>CADASTRE SEU EVENTO</Typography>
    <FormSection>
      <Register />
      
    </FormSection>

    </RegisterContainer>
  );
}
