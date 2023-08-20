'use client'
import HeaderProfile from '@/components/Profile/HeaderProfile'
import ProfileCards from '@/components/Profile/Cards/ProfileCards'



export default function RootLayout({children}) {
  return (
        <>
            <HeaderProfile/>
            <ProfileCards/>
            {children}
        </>
      

  )
}
