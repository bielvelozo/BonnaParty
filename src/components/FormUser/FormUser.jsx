'use client'

import {
    FormColumn,
    FormSection,
    FormRow,
    FormTitle,
    FormSwitch
} from './FormStyles';
import { Container } from '../../globalStyles';
import Register from './Register'
import Login from './Login'
import { useState } from "react"




export default function register() {

    const [selectedTitle, setSelectedTitle] = useState('register');




    const handleTitleClick = (title) => {
        setSelectedTitle(title);
    };

    const selected = '#b9b9b9'

    return (
        <FormSection>

            <Container>
                <FormRow>
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
                        {selectedTitle === 'login' ? <Login/> : <Register/>}
                    </FormColumn>
                </FormRow>
            </Container>


        </FormSection>
    )
}
