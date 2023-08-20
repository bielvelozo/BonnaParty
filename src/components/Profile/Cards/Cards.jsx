'use client'

import * as React from 'react';
import { Card, IconLink, LiCards, UlCards } from '../../../styles/profileCards.styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyIcon from '@mui/icons-material/Key';
import { useReducer, createContext, useState } from 'react';
import { useContext } from 'react'





function reducer(state, action) {
    switch (action.type) {
        case 'select':
            return {
                like: action.card === 'like' ? !state.like : false,
                email: action.card === 'email' ? !state.email : false,
                pass: action.card === 'pass' ? !state.pass : false,
                logout: action.card === 'logout' ? !state.logout : false
            };
        default:
            return state;
    }
}

const initialState = {
    like: false,
    email: false,
    pass: false,
    logout: false
};

const contentContext = createContext('events')

export default function Myacc() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [content, setContent] = useState('events');



    return (
        <contentContext.Provider value={content}>

            <UlCards>
                <LiCards>
                    <Card
                        onClick={() => {
                            dispatch({ type: 'select', card: 'like' })
                            setContent('event')
                        }}
                        color={state.like ? '#102133' : ''}
                    >
                        Eventos Curtidos
                        <IconLink>
                            <FavoriteIcon fontSize='medium' />
                        </IconLink>
                    </Card>
                </LiCards>
                <LiCards>
                    <Card
                        onClick={() => dispatch({ type: 'select', card: 'email' })}
                        color={state.email ? '#102133' : ''}
                    >
                        Alterar Email
                        <IconLink>
                            <AlternateEmailIcon fontSize='medium' />
                        </IconLink>
                    </Card>
                </LiCards>
                <LiCards>
                    <Card
                        onClick={() => dispatch({ type: 'select', card: 'pass' })}
                        color={state.pass ? '#102133' : ''}
                    >
                        Alterar Senha
                        <IconLink>
                            <KeyIcon fontSize='medium' />
                        </IconLink>
                    </Card>
                </LiCards>
                <LiCards>
                    <Card
                        onClick={() => dispatch({ type: 'select', card: 'logout' })}
                        color={state.logout ? '#102133' : ''}
                    >
                        Sair
                        <IconLink>
                            <LogoutIcon fontSize='medium' />
                        </IconLink>
                    </Card>
                </LiCards>
            </UlCards>
        </contentContext.Provider>
    );
}
