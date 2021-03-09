import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const TicketDisplay = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        API.allTickets()
            .then(result => {
                setTickets(result)
            })
    }, [])


    return (
        <div>
            <h1>Tickets will go here</h1>
            <div className='ticketContainer'>

            </div>
        </div>
    )
}

export default TicketDisplay;