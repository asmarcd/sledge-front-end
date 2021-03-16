import React, { useContext, useState } from 'react';
import { ViewContext } from '../App';
import API from '../utils/API';
import useForm from '../utils/CustomHooks';

const TicketCreator = () => {

    const toggleTicketCreator = useContext(ViewContext);
    const [newLabelView, setNewLabelView] = useState(false)

    const newTicket = () => {
        API.createTicket(inputs)

        alert(`New Ticket Submitted!
        Title: ${inputs.title}`)

        toggleTicketCreator();
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(newTicket);

    const labelCreatorView = () => {
        setNewLabelView(true);
    }

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
                    Status:
                    <select name="status" onChange={handleInputChange} value={inputs.status}>
                        <option value='Pending'>Pending</option>
                        <option value='To Do'>To Do</option>
                        <option value='Complete'>Complete</option>
                        <option value='Archived'>Archived</option>
                    </select>
                </label>
                <br />
                <label>
                    Choose a Label:
                    <select name="label" onChange={handleInputChange} value={inputs.label} props={setNewLabelView}>
                    </select>
                    {/* react is reading this button as a submit for the whole form, so the label creator never comes up, since it "submits" this form and doesn't move into that phase. Need to rework this. */}
                    <button onClick={labelCreatorView}>Add a label</button>
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description" onChange={handleInputChange} value={inputs.description} />
                </label>
                <br />
                <label>
                    Priority:
                    <select name="priority" onChange={handleInputChange} value={inputs.priority}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </label>
                <br />
                <button type='submit' >Submit</button>
                <button onClick={toggleTicketCreator}>Cancel</button>
            </form>
        </div>
    )
}

export default TicketCreator;