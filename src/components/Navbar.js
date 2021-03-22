import React, { useContext } from 'react';
import { ViewContext } from '../App';

const Navbar = () => {

    const toggleTicketCreator = useContext(ViewContext);

    return (
        <div>
            <header className='title is-1'>Sledgehammer!</header>
            <header className='subtitle'>Crush your biggest bugs</header>
            <button className='button' onClick={toggleTicketCreator}>Create New Ticket</button>
        </div>
    )
}

export default Navbar;