import React, { useContext } from 'react';
import { ViewContext } from '../App';

const Navbar = () => {

    const openTicketCreator = useContext(ViewContext)

    return (
        <div>
            <h2>Navbar will go here</h2>
            <button onClick={openTicketCreator}>Create New Ticket</button>
        </div>
    )
}

export default Navbar;