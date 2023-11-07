'use client'

import { useEffect } from "react"



const profile = () => {
    useEffect (() => {

        if(location.storage) {
            location.replace('/')
        }
    },[] )
 
    return (
        <>

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