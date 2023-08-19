'use client'

import * as React from 'react';
import { Card, IconLink, liCards } from '../../../styles/profileCards.styled'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export default function Myacc() {
    const [color, setColor] = useState('')


    const click = () => {
        setColor('#102133')
        console.log(color)
    }

    return (
        <liCards>
            <Card onClick={click} color={color}>
                Eventos Curtidos
                <IconLink >
                    <FavoriteIcon fontSize='medium' />
                </IconLink>
            </Card>
            <Card onClick={click} color={color}>
                Alterar Email
                <IconLink >
                    <FavoriteIcon fontSize='medium' />
                </IconLink>
            </Card>
            <Card onClick={click} color={color}>
                Alterar Senha
                <IconLink >
                    <FavoriteIcon fontSize='medium' />
                </IconLink>
            </Card>
            <Card onClick={click} color={color}>
                Sair
                <IconLink >
                    <FavoriteIcon fontSize='medium' />
                </IconLink>
            </Card>

        </liCards>
    )

}