import React, { useContext, useState, useEffect } from 'react';
import LabelCreator from './LabelCreator';
import API from '../utils/API';
import { EditTicketContext } from './Ticket';
import { UpdatePageContext } from './TicketDisplay/TicketDisplay';

export const LabelContext = React.createContext();

const TicketEditor = props => {

    const ToggleTicketEditor = useContext(EditTicketContext);
    const PageRefresh = useContext(UpdatePageContext);
    const [newLabelView, setNewLabelView] = useState(false);
    const [labels, setLabels] = useState([]);
    const [inputs, setInputs] = useState(props.ticketInfo)

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

    const editTicket = () => {
        API.editTicket(inputs);

        alert(`${props.ticketInfo.title} edited`);

        ToggleTicketEditor();
        PageRefresh();
    }

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
        }
        editTicket();
    }

    const handleInputChange = e => {
        e.persist();
        setInputs(inputs => ({
            ...inputs, [e.target.name]:
                e.target.value
        }));
    };

    return (
        <div className='box'>
            <header className='title is-6'>Edit {inputs.title}</header>
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
                <button className='button' onClick={ToggleTicketEditor}>Cancel</button>
            </form>
        </div>
    )
}

export default TicketEditor;