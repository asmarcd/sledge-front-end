import React, { useState, useEffect } from 'react';
import API from '../utils/API';

const TicketDisplay = () => {

    const [tickets, setTickets] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);
    const [showArchived, setShowArchived] = useState(false);

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

    const toggleArchived = () => {
        showArchived ? setShowArchived(false) : setShowArchived(true);
    }

    //   organize by status, so to do, in progress, complete, each have their own column. You can pull up archived separately. 

    return (
        <div>
            <h1>Tickets</h1>
            <section className='ticketContainer'>
                <h2>To Do</h2>
                <column className='toDoCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'To Do') {
                            return (
                                <div key={ticket.id}>
                                    <h3>{ticket.title}</h3>
                                    <h4>Creator: TBD Owner: {ticket.owner}</h4>
                                    <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                                    <p>{ticket.label}</p>
                                    <p>{ticket.status}</p>
                                    <p>{ticket.description}</p>
                                    <p>Priority {ticket.priority}</p>
                                    <button>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </column>
                <h2>In Progress</h2>
                <column className='inProgCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'In Progress') {
                            return (
                                <div key={ticket.id}>
                                    <h3>{ticket.title}</h3>
                                    <h4>Creator: TBD Owner: {ticket.owner}</h4>
                                    <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                                    <p>{ticket.label}</p>
                                    <p>{ticket.status}</p>
                                    <p>{ticket.description}</p>
                                    <p>Priority {ticket.priority}</p>
                                    <button>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </column>
                <h2>Complete</h2>
                <column className='completeCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'Complete') {
                            return (
                                <div key={ticket.id}>
                                    <h3>{ticket.title}</h3>
                                    <h4>Creator: TBD Owner: {ticket.owner}</h4>
                                    <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                                    <p>{ticket.label}</p>
                                    <p>{ticket.status}</p>
                                    <p>{ticket.description}</p>
                                    <p>Priority {ticket.priority}</p>
                                    <button>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </column>
                {!showArchived ? <button onClick={toggleArchived}>Show Archived Tickets</button> :
                    <div>
                        <h2>Archived</h2>
                        <button onClick={toggleArchived}>Hide Archived Tickets</button>
                        <column className='archivedCol'>
                            {tickets.map(ticket => {
                                if (ticket.status === 'Archived') {
                                    return (
                                        <div key={ticket.id}>
                                            <h3>{ticket.title}</h3>
                                            <h4>Creator: TBD Owner: {ticket.owner}</h4>
                                            <h4>Created: {ticket.createdAt} Last Updated: {ticket.updatedAt}</h4>
                                            <p>{ticket.label}</p>
                                            <p>{ticket.status}</p>
                                            <p>{ticket.description}</p>
                                            <p>Priority {ticket.priority}</p>
                                            <button>Edit</button>
                                            <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                        </div>
                                    )
                                }
                            })}
                        </column>
                    </div>
                }
            </section>
        </div>
    )
}

export default TicketDisplay;