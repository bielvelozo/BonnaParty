'use client'

import {
    ImageDiv,
    StyledHeader,
    StyledLi,
    StyledNav
} from './header.style.jsx'

import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

import Image from "next/image"
import FormUser from '../FormUser/FormUser'
import { useState, useEffect } from "react"
import { MenuItem } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex.js';
import { white } from '@mui/material/colors';
import { withTheme } from 'styled-components';


function Header() {

    const [showLogin, setShowLogin] = useState(false)
    const [show, setShow] = useState(false)


    useEffect(() => {
        setShow(localStorage.getItem("id") > 0)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        setShowLogin(true);
        

        return false;
    };

    const handleProfile = (e) => {
        e.preventDefault();

        return false;
    }

    return (
        <>
            <StyledHeader>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    zIndex: '10'
                }}>
                    <MenuItem>Explorar Eventos</MenuItem>
                    <MenuItem>Cadastrar Eventos</MenuItem>
                    <MenuItem>Central de Ajuda</MenuItem>
                </Box>

                <ImageDiv>

                    <Image
                        src={'/assets/white_logo.png'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="BonnaParty logo"
                        style={{
                            width: '100px',
                            height: 'auto',
                            margin: '0 auto'
                        }}


                    />
                </ImageDiv>


                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <SearchIcon />
                    <FavoriteBorderIcon sx={{ ml: 2 }} />
                    <IconButton
                        onClick={show ? handleProfile : handleLogin}
                        size="small"
                        sx={{ ml: 2 }}

                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Box>


            </StyledHeader>

            {showLogin && <FormUser />}

        </>
    )
}



export default Header;