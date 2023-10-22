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

export default function FormRegister({ show, set }) {
  return (
    <FormSection>
      <Register />
    </FormSection>
  );
}
