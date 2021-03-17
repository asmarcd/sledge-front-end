import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import useForm from '../utils/CustomHooks';

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

    const editTicket = e => {
        // click event is set up to properly reference the id of the ticket, but the actual interface to do the editing doesn't exist yet. Two possible approaches. 1. get Ticket Creator to reopen with the relevant inputs in place, then submit that once edited to change the ticket. 2. Create another editor component that looks similar, edits the ticket instead. I think option two, despite requiring a separate component, will be easier to create and customize.
        console.log(e.target.value)

        // API.editTicket(e.target.value)
        // .then(ticketViewRefresh());
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(editTicket);


    return (
        <div>
            <h1>Tickets</h1>
            <section className='ticketContainer'>
                <h2>To Do</h2>
                <div className='toDoCol'>
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
                                    <button value={ticket.id} onClick={editTicket}>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </div>
                <h2>In Progress</h2>
                <div className='inProgCol'>
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
                                    <button value={ticket.id} onClick={editTicket}>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </div>
                <h2>Complete</h2>
                <div className='completeCol'>
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
                                    <button value={ticket.id} onClick={editTicket}>Edit</button>
                                    <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                </div>
                            )
                        }
                    })}
                </div>
                {!showArchived ? <button onClick={toggleArchived}>Show Archived Tickets</button> :
                    <div>
                        <h2>Archived</h2>
                        <button onClick={toggleArchived}>Hide Archived Tickets</button>
                        <div className='archivedCol'>
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
                                            <button value={ticket.id} onClick={editTicket}>Edit</button>
                                            <button value={ticket.id} onClick={deleteTicket}>Delete</button>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}

export default TicketDisplay;