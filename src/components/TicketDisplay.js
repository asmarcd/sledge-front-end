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
            <section className='ticketContainer'>
                    {tickets.map(ticket => {
                        return (
                            <div>
                                <h3>{ticket.title}</h3>
                                <h4>Creator: TBD Owner: {ticket.owner}</h4>
                                <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                                <p>{ticket.type}</p>
                                <p>{ticket.description}</p>
                                <p>Priority {ticket.priority}</p>
                                <button>Edit</button>
                            </div>
                        )
                    })}
            </section>
        </div>
    )
}

export default TicketDisplay;