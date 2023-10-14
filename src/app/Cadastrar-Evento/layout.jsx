'use client'
import HeaderProfile from '@/components/Profile/HeaderProfile'
import ProfileCards from '@/components/Profile/Cards/ProfileCards'
import { Center } from '@/styles/profileCards.style'
import { DivCards } from '@/styles/profileCards.style'



export default function RootLayout({ children }) {
    return (
        <>
            <HeaderProfile />
            <DivCards>
                <Center>

                    {children}
                </Center>
            </DivCards>
        </>


    )
}
