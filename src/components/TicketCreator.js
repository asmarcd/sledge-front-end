import React, { useContext } from 'react';
import { ViewContext } from '../App';
import API from '../utils/API';
import useForm from '../utils/CustomHooks'

const TicketCreator = () => {

    const toggleTicketCreator = useContext(ViewContext);

    const newTicket = () => {
        API.createTicket()

        alert(`New Ticket Submitted!
        Title: ${inputs.title}`)

        toggleTicketCreator();
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(newTicket);

    return (
        <div>
            <h1>Submit a New Ticket</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleInputChange} value={inputs.title} />
                </label>
                <br />
                <label>
                    Label:
                    <input type="text" name="label" onChange={handleInputChange} value={inputs.label} />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" onChange={handleInputChange} value={inputs.description} />
                </label>
                <br />
                <label>
                    Priority:
                    <input type="range" name="priority" onChange={handleInputChange} value={inputs.priority} />
                </label>
                <br />
                <button type='submit' >Submit</button>
                <button onClick={toggleTicketCreator}>Cancel</button>
            </form>
        </div>
    )
}

export default TicketCreator;