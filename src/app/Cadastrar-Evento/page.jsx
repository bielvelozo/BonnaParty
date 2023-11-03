import FormRegister from "@/components/RegisterEvent/FormRegister";
import { Typography } from "@mui/material";

export default function RegisterEvent() {
  return (
    <>
      <Typography style={{textAlign:'center' , marginBottom:50}} variant="h2">Cadastre seu evento</Typography>
      <FormRegister></FormRegister>
    </>
  );
}
