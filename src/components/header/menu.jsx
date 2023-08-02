'use client'

import Image from "next/image"
import './menu.css'
import Login from '../login/Login'
import { useState } from "react"

export default props => {

    const [showLogin , setShowLogin] = useState(false)
    const [showUl , setShowUl] = useState(false)

    let show = localStorage.getItem("id") > 0

    console.log(show)
    const handleLogin = (e) => {
        e.preventDefault();
        setShowLogin(true);

        return false; 
    };

    const handleUl = (e) =>{
        e.preventDefault();
        setShowUl(true);

        return false; 
    }

    return (
        <>
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="#">Explorar Eventos</a></li>
                    <li><a href="#">Cadastrar eventos</a></li>
                    <li><a href="#">Central de Ajuda</a></li>
                </ul>
            </nav>

            <Image 
                src={'/assets/white_logo.png'}
                width={0}
                height={0}
                sizes="100vw"
                alt="BonnaParty logo"
                style={{ width: '100px', height: 'auto', margin:'10px 130px 10px 0 ' }}
                
            />

            
            <div className="header_client">
                <ul>
                    <li className="clien_search">
                        <a href=""><Image src={"/assets/search.png"} width={20} height={20} alt="search"/></a>
                    </li>
                    <li className="clien_like">
                        <a href=""><Image src={"/assets/like.png"} width={20} height={20} alt="search"/></a>
                    </li>
                    <li>
                        {localStorage.getItem("name")}
                    </li>
                     <li className="client_profile" onClick={show ? handleUl : handleLogin}
                        >
                        <a href=""><Image src={"/assets/profile.png"} width={20} height={20} alt="search"/></a>
                        {showUl &&
                         <ul>
                            <li>Ver Perfil</li>
                            <li>Sair</li>
                        </ul>
                        }
                    </li>
                </ul>
            </div>

           
        </header>

        {showLogin && <Login/>}

        </>
    )
}