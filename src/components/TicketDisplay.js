import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Ticket from './Ticket';

export const UpdatePageContext = React.createContext();

const TicketDisplay = () => {

    const [tickets, setTickets] = useState([]);
    const [updatePage, setUpdatePage] = useState(false);
    const [showArchived, setShowArchived] = useState(false);

    useEffect(() => {
        API.allTickets()
            .then(result => {
                setTickets(result);
            })
    }, [updatePage]);

    const ticketViewRefresh = () => {
        if (!updatePage) {
            setUpdatePage(true);
        } else {
            setUpdatePage(false);
        }
    };

    const toggleArchived = () => {
        showArchived ? setShowArchived(false) : setShowArchived(true);
    };


    return (
        <div>
            <h1>Tickets</h1>
            <section className='ticketContainer'>
                <h2>To Do</h2>
                <div className='toDoCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'To Do') {
                            return (
                                <UpdatePageContext.Provider value={ticketViewRefresh}>
                                    <Ticket props={ticket} />
                                </UpdatePageContext.Provider>
                            )
                        }
                        return ("")
                    })}
                </div>
                <h2>In Progress</h2>
                <div className='inProgCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'In Progress') {
                            return (
                                <UpdatePageContext.Provider value={ticketViewRefresh}>
                                    <Ticket props={ticket} />
                                </UpdatePageContext.Provider>
                            )
                        }
                        return ("")
                    })}
                </div>
                <h2>Complete</h2>
                <div className='completeCol'>
                    {tickets.map(ticket => {
                        if (ticket.status === 'Complete') {
                            return (
                                <UpdatePageContext.Provider value={ticketViewRefresh}>
                                    <Ticket props={ticket} />
                                </UpdatePageContext.Provider>
                            )
                        }
                        return ("")
                    })}
                </div>
                {!showArchived ? <button onClick={toggleArchived}>Show Archived Tickets</button> :
                    <div>
                        <h2>Archived</h2>
                        <div className='archivedCol'>
                            {tickets.map(ticket => {
                                if (ticket.status === 'Archived') {
                                    return (
                                        <UpdatePageContext.Provider value={ticketViewRefresh}>
                                            <Ticket props={ticket} />
                                        </UpdatePageContext.Provider>
                                    )
                                }
                                return ("")
                            })}
                        </div>
                        <button onClick={toggleArchived}>Hide Archived Tickets</button>
                    </div>
                }
            </section>
        </div>
    )
}

export default TicketDisplay;