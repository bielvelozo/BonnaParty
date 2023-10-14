'use client'

import {
    FormColumn,
    FormSection,
    FormRow,
    FormTitle,
    FormSwitch,
    CLoseButton
} from './FormStyles';
import { Container } from '../../globalStyles';
import Register from './Register'
import Login from './Login'
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';




export default function register({show , set}) {

    const [selectedTitle, setSelectedTitle] = useState('register');
    const [closeSection, setCloseSection] = useState(true)

    const handleTitleClick = (title) => {
        setSelectedTitle(title);
    };

    function handleCloseSection() {
        set(!show)
    
    }

    const selected = '#b9b9b9'

    return (

        <>
            {show &&
                <FormSection>

                    <Container>
                        <FormRow>
                            <CLoseButton onClick={() => handleCloseSection()}>
                                <CloseIcon style={{width: 40, height: 'auto'}}/>
                            </CLoseButton>
                            <FormColumn>
                                <FormSwitch >
                                    <FormTitle
                                        onClick={() => handleTitleClick('register')}
                                        selected={selectedTitle === 'register' && selected}
                                    >Cadastro</FormTitle>
                                    <FormTitle
                                        onClick={() => handleTitleClick('login')}
                                        selected={selectedTitle === 'login' && selected}
                                    >Login</FormTitle>
                                </FormSwitch>
                                {selectedTitle === 'login' ? <Login /> : <Register />}
                            </FormColumn>
                        </FormRow>
                    </Container>
                </FormSection>
            }
        </>
    )
}
