'use client'

import SavedEvents from "@/components/Profile/SavedEvents";
import { useEffect } from "react";




export default function Events() {

    useEffect(() => {

        if(location.storage) {
            location.replace('/')
        }
    },[] )

    return(
        // <SavedEvents></SavedEvents>
        <div></div>
    )
}

