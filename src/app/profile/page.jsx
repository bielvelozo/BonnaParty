'use client'
import Header from '../../components/Profile/HeaderProfile'
import ProfileCards from '../../components/Profile/Cards/ProfileCards'
import { useContext } from 'react'

const profile = () => {

    // const logout = () => {
    //     localStorage.clear()
    //     location.replace(`/`);
    // }

 
    return (
        <>
            <Header />
            <ProfileCards/>
            {/* <div>
                <ul>
                    <li>{localStorage.getItem('name')}</li>
                    <li>{localStorage.getItem('email')}</li>
                </ul>

                <button onClick={() => logout()}>Logout</button>
            </div> */}
        </>
    )
}

export default profile