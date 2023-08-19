import {
    ImageDiv,
    SympleStyledHeader,
} from '../../styles/header.style.jsx'
import Image from 'next/image.js'


export default function HeaderProfile() {
    return(
       <SympleStyledHeader>
            <ImageDiv>
            <Image
                        src={'/assets/black_logo.png'}
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
        </SympleStyledHeader>
    )
}