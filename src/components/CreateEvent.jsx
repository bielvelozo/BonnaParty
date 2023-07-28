'use client'

import { useState } from "react"
import "./createEvent.css"
import axios from  'axios'


export default props => {

    const [inputs, setInputs] = useState({
        name: "",
        date: "",
        state: "",
        city: "",
        address: "",
        time: "",
        mobile: "", 
    });

    const [img, setImg] = useState({image: null,})


    return(
        <div>
             
                <label>Nome do Evento:</label>
            
        
                <label>Data:</label>
                
                
                <label>Estado:</label>
               

                <label>Cidade:</label>
                
                
                <label>Endereço:</label>
                

                <label>Horário de início:</label>
               

                <label>Contato:</label>
                <input type="tel" name="mobile"  pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required placeholder="(xx) xxxxx-xxxx" />
                
                <label>Imagem do evento</label>
               
             
                <input type="button" value="SEND" />

        </div>
    )
}