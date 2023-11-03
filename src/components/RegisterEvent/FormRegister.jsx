"use client";

import {
  FormColumn,
  FormSection,
  FormRow,
  FormTitle,
  FormSwitch,
  CLoseButton,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import Register from "./RegisterEvent";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

export default function FormRegister({ show, set }) {
  return (
    <FormSection>
      <Register />
    </FormSection>
  );
}
