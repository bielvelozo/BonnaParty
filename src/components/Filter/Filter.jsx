"use client";

import * as React from "react";
import { FilterContainer } from "./Filter.style";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { Container } from "@/globalStyles";

const regioesSP = [
  "Grande São Paulo",
  "Vale do Paraíba e Litoral Norte",
  "Campinas e Região",
  "Bauru e Região",
  "Sorocaba e Região",
  "Ribeirão Preto e Região",
  "São José do Rio Preto e Região",
  "Araraquara e Região",
  "Assis e Região",
  "Marília e Região",
  "Presidente Prudente e Região",
  "Registro e Região",
];

function Filter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <FilterContainer>
        <Typography variant="subtitle1" sx={{ marginBottom: 1.3 }}>
          Eventos em:
        </Typography>

        <FormControl variant="standard" sx={{ minWidth: 120, m: 1 }}>
          <InputLabel>Região</InputLabel>
          <Select value={age} onChange={handleChange} label="Região">
            <MenuItem value="">
              <em>Nenhuma</em>
            </MenuItem>
            {regioesSP.map((regiao, i) => (
              <MenuItem key={i} value={regiao}>
                {regiao}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FilterContainer>
    </Container>
  );
}

export default Filter;
