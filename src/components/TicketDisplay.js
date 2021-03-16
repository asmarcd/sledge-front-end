import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const TicketDisplay = () => {

    const [tickets, setTickets] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);

    useEffect(() => {
        API.allTickets()
            .then(result => {
                setTickets(result)
            })
    }, [updatePage]);

    const deleteTicket = e => {
        API.deleteTicket(e.target.value)
        .then(ticketViewRefresh())
    }

    const ticketViewRefresh = () => {
        if (!updatePage) {
          setUpdatePage(true);
        } else {
          setUpdatePage(false);
        }
      }

    //   organize by type, so to do, in progress, complete, each have their own column. You can pull up archived separately. 

    return (
        <div>
            <h1>Tickets</h1>
            <section className='ticketContainer'>
                {tickets.map(ticket => {
                    return (
                        <div key={ticket.id}>
                            <h3>{ticket.title}</h3>
                            <h4>Creator: TBD Owner: {ticket.owner}</h4>
                            <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                            <p>{ticket.label}</p>
                            <p>{ticket.description}</p>
                            <p>Priority {ticket.priority}</p>
                            <button>Edit</button>
                            <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default TicketDisplay;