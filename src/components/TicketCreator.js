import React, { useContext } from 'react';
import { ViewContext } from '../App';

const TicketCreator = () => {

    const toggleTicketCreator = useContext(ViewContext);

    const submitTicket = () => {


        toggleTicketCreator();
    };

    const cancelTicket = () => {



        toggleTicketCreator();
    }

    return (
        <div>
            <h1>Submit a New Ticket</h1>
            <form>
                <label>
                    Title:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Label:
                    <input type="text" name="label" />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <br />
                <label>
                    Priority:
                    <input type="range" name="priority" />
                </label>
                <br />
                <button type='submit' onClick={submitTicket}>Submit</button>
                <button onClick={cancelTicket}>Cancel</button>
            </form>
        </div>
    )
}

export default TicketCreator;