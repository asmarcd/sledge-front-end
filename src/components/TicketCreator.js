import React, { useContext, useState, useEffect } from 'react';
import { ViewContext } from '../App';
import API from '../utils/API';
import useForm from '../utils/CustomHooks';
import LabelCreator from './LabelCreator';

export const LabelContext = React.createContext();

const TicketCreator = () => {

    const toggleTicketCreator = useContext(ViewContext);
    const [newLabelView, setNewLabelView] = useState(false);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        API.allLabels()
            .then(result => {
                setLabels(result);
            })
    }, [newLabelView]);

    const toggleLabelCreator = () => {
        if (!newLabelView) {
            setNewLabelView(true);
        } else {
            setNewLabelView(false);
        }
    };

    const submitTicket = () => {
        API.createTicket(inputs)

        alert(`New Ticket Submitted!
        Title: ${inputs.title}`)

        toggleTicketCreator();
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(submitTicket);

    return (
        <div>
            <h1>Submit a New Ticket</h1>
            <button className='button' onClick={toggleLabelCreator}>Add a new label</button>
            <LabelContext.Provider value={toggleLabelCreator}>
                {newLabelView ? <LabelCreator /> : <div></div>}
            </LabelContext.Provider>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleInputChange} value={inputs.title} />
                </label>
                <br />
                <label>
                    Status:
                    <select name="status" onChange={handleInputChange} value={inputs.status}>
                        <option value=""></option>
                        <option value='To Do'>To Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Complete'>Complete</option>
                        <option value='Archived'>Archived</option>
                    </select>
                </label>
                <br />
                <label>
                    Choose a Label:
                    <select name="label" onChange={handleInputChange} value={inputs.label}>
                        <option value=""></option>
                        {labels.map(label => {
                            return (<option key={label.id} value={label.name}>{label.name}</option>)
                        })}
                    </select>
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
                <button className='button' type='submit' >Submit</button>
                <button className='button' onClick={toggleTicketCreator}>Cancel</button>
            </form>
        </div>
    )
}

export default TicketCreator;