'use client'

import SavedEvents from "@/components/Profile/SavedEvents";

if(location.storage) {
    location.replace('/')
}

export default function Events() {
    return(
        <SavedEvents></SavedEvents>
    )
}

