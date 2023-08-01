
import Image from "next/image"
import './menu.css'
export default props => {
    return (
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="#"></a>Explorar Eventos</li>
                    <li><a href="#"></a>Cadastrar eventos</li>
                    <li><a href="#"></a>Central de Ajuda</li>
                </ul>
            </nav>

            <Image 
                src={'/assets/white_logo.png'}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '120px', height: 'auto' }}
            />

            
           

            <div className="header_client">
                <ul>
                    <li className="clien_search">
                        <a href=""><Image src={"/assets/search.png"} width={20} height={20} alt="search"/></a>
                    </li>
                    <li className="clien_like">
                        <a href=""><Image src={"/assets/like.png"} width={20} height={20} alt="search"/></a>
                    </li>
                    <li className="clien_profile">
                        <a href=""><Image src={"/assets/profile.png"} width={20} height={20} alt="search"/></a>
                    </li>
                </ul>
            </div>

        </header>
    )
}