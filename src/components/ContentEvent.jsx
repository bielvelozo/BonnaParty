'use client'

import axios from "axios"
import "./ContentEvent.css"
import { useEffect } from "react"
import { useState } from "react"



const content = props => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents();
    }, [])

    const getEvents = () => {
        axios.get('http://localhost/bonna_party/src/api/index.php')
            .then(response => {
                setEvents(response.data)
            })
    }



    return (
        <div></div>
        // <div className="card">
        //     {events.map((event, key) => 
        //         <div className="infos" key={key}>
        //             {/* <img width={'200px'} src={event.image} alt="" /> */}
        //             <h2>{event.name}</h2>
        //             <p className="local">Local: {event.state} - {event.city} - {event.address}</p>
        //             <p className="date">Data: {event.date} as {event.time}</p>
        //             <p className="contact">Contato: {event.mobile}</p>
        //         </div>
        //     )}
        // </div>
    )
}

export default content