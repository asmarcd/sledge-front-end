import React, {useState, useEffect} from 'react';

const TicketDisplay = () => {

    const [ticketView, setTicketView] = useState([]);

    useEffect(() => {
        // reference api to pull in relevant tickets.
    })


    return (
        <div>
            <h1>Tickets will go here</h1>
            <p>Here's a ticket</p>
        </div>
    )
}

export default TicketDisplay;