'use client'

import ChangePassword from '@/components/Profile/ChangePassword'
import { useEffect } from 'react'


export default function Pass() {
    useEffect(() => {

        if(location.storage) {
            location.replace('/')
        }
    },[] )

    return(
        <ChangePassword/>
    )
}
