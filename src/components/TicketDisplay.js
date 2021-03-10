import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const TicketDisplay = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        API.allTickets()
            .then(result => {
                setTickets(result)
            })
    }, []);
    // I believe this will run every time this component renders, so there's no need to pass through the view state to the array in useEffect. It should refresh the tickets by checking the database every time. The issue is more one of timing, since the creation of the new ticket may take longer than the rerendering of this component. I should take that into consideration with how the submit button is set up on the new ticket form.


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