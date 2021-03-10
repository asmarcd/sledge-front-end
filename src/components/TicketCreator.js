import React, { useContext } from 'react';
import { ViewContext } from '../App';

const TicketCreator = () => {

    const toggleTicketCreator = useContext(ViewContext);

    return (
        <div>
            <div>Ticket Creator</div>
            <button onClick={toggleTicketCreator}>Submit</button>
            <button onClick={toggleTicketCreator}>Cancel</button>
        </div>
    )
}

export default TicketCreator;