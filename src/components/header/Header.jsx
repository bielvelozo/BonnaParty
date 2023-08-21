'use client'

import {
    ImageDiv,
    StyledHeader,
} from '../../styles/header.style.jsx'

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

import Image from "next/image"
import FormUser from '../FormUser/FormUser.jsx'
import { useState, useEffect } from "react"
import { MenuItem } from '@mui/material';



function Header() {

    const [showLogin, setShowLogin] = useState(false)
    const [show, setShow] = useState(false)
    const [avatar, setAvatar] = useState('')



    useEffect(() => {
        setShow(localStorage.getItem("id") > 0)
        setAvatar(
                localStorage.getItem("name") &&
                localStorage.getItem("name")[0]
            )
    }, [])



    const handleLogin = (e) => {
        e.preventDefault();
        setShowLogin(true);
        

        return false;
    };

    const handleProfile = (e) => {
        e.preventDefault();
        location.replace('/profile/SavedEvents')
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
                        <Avatar sx={{ width: 32, height: 32 }}>{avatar && avatar}</Avatar>
                    </IconButton>
                </Box>


            </StyledHeader>

            {showLogin && <FormUser />}

        </>
    )
}



export default Header;