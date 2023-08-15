'use client'

import{ 
  StyledHeader,
  StyledNav
 } from './header.style.jsx'

import Image from "next/image"
import FormUser from '../FormUser/FormUser'
import { useState } from "react"

function Header() {

    const [showLogin , setShowLogin] = useState(false)


    let show = localStorage.getItem("id") > 0

    const handleLogin = (e) => {
        e.preventDefault();
        setShowLogin(true);

        return false; 
    };

    const handleProfile = (e) =>{
        e.preventDefault();
        
        return false; 
    }

    return (
        <>
        <StyledHeader>
            <StyledNav >
    
                    <li><a href="#">Explorar Eventos</a></li>
                    <li><a href="#">Cadastrar eventos</a></li>
                    <li><a href="#">Central de Ajuda</a></li>
              
            </StyledNav>

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
                     <li className="client_profile" onClick={show ? handleProfile : handleLogin}
                        >
                        <a href=""><Image src={"/assets/profile.png"} width={20} height={20} alt="search"/></a>

                    </li>
                </ul>
            </div>

           
        </StyledHeader>

        {showLogin && <FormUser/>}

        </>
    )
}



export default Header;



// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

{/* <Image      
src={'/assets/white_logo.png'}
sx={{mr: 1 }}
width={0}
height={0}
sizes="100vw"
alt="BonnaParty logo"
style={{ width: '100px', height: 'auto', margin:'0 auto'}}

/> */}

// import Image from "next/image"
// import FormUser from '../FormUser/FormUser'
// import { useState } from "react"

// export default props => {

//     const [showLogin , setShowLogin] = useState(false)


//     let show = localStorage.getItem("id") > 0

//     const handleLogin = (e) => {
//         e.preventDefault();
//         setShowLogin(true);

//         return false; 
//     };

//     const handleProfile = (e) =>{
//         e.preventDefault();
        
//         return false; 
//     }

//     return (
//         <>
//         <header>
//             <nav className="navbar">
//                 <ul>
//                     <li><a href="#">Explorar Eventos</a></li>
//                     <li><a href="#">Cadastrar eventos</a></li>
//                     <li><a href="#">Central de Ajuda</a></li>
//                 </ul>
//             </nav>

//             <Image 
//                 src={'/assets/white_logo.png'}
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 alt="BonnaParty logo"
//                 style={{ width: '100px', height: 'auto', margin:'10px 130px 10px 0 ' }}
                
//             />

            
//             <div className="header_client">
//                 <ul>
//                     <li className="clien_search">
//                         <a href=""><Image src={"/assets/search.png"} width={20} height={20} alt="search"/></a>
//                     </li>
//                     <li className="clien_like">
//                         <a href=""><Image src={"/assets/like.png"} width={20} height={20} alt="search"/></a>
//                     </li>
//                      <li className="client_profile" onClick={show ? handleProfile : handleLogin}
//                         >
//                         <a href=""><Image src={"/assets/profile.png"} width={20} height={20} alt="search"/></a>

//                     </li>
//                 </ul>
//             </div>

           
//         </header>

//         {showLogin && <FormUser/>}

//         </>
//     )
// }