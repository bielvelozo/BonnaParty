'use client'

import { useEffect } from "react";
import ChangeEmail from "../../../components/Profile/ChangeEmail";

export default function Email() {
    useEffect(() => {

        if(location.storage) {
            location.replace('/')
        }
    },[] )
    return(
        <ChangeEmail/>
    )
}