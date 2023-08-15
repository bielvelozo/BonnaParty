'use client'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    "Registro e Região"
]

console.log(regioesSP)

function Filter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Região</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Região"
            >
                <MenuItem value="">
                    <em>Nenhuma</em>
                </MenuItem>
                {regioesSP.map((regiao, i) => (
                    <MenuItem key={i} value={regiao}>{regiao}</MenuItem>
                ))}

            </Select>
        </FormControl>
    )
}

export default Filter