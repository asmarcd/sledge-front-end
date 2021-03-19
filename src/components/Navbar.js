import React, { useContext } from 'react';
import { ViewContext } from '../App';

const Navbar = () => {

    const toggleTicketCreator = useContext(ViewContext);

    return (
        <div>
            <h2>Sledgehammer!</h2>
            <button onClick={toggleTicketCreator}>Create New Ticket</button>
        </div>
    )
}

export default Navbar;