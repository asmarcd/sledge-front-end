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
        <div className='box'>
            <section className='columns'>
                <div className='column'>
                    <header className='title is-4'>To Do</header>
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
                <div className='column'>
                    <header className='title is-4'>In Progress</header>
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
                <div className='column'>
                    <header className='title is-4'>Complete</header>
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
            </section>
            {!showArchived ? <button className='button' onClick={toggleArchived}>Show Archived Tickets</button> :
                <div>
                    <div className='column'>
                        <header className='title is-4'>Archived</header>
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
                    <button className='button' onClick={toggleArchived}>Hide Archived Tickets</button>
                </div>
            }
        </div>
    )
}

export default TicketDisplay;