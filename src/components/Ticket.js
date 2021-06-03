import React, { useContext, useState } from 'react';
import API from '../utils/API';
import { UpdatePageContext } from './TicketDisplay/TicketDisplay';
import TicketEditor from './TicketEditor';

export const EditTicketContext = React.createContext();

const Ticket = props => {

    const updatePage = useContext(UpdatePageContext);
    const [editView, setEditView] = useState(false)

    // eslint-disable-next-line
    const [ticketInfo, setTicketInfo] = useState({
        id: props.props.id,
        title: props.props.title,
        owner: props.props.owner,
        label: props.props.label,
        status: props.props.status,
        description: props.props.description,
        priority: props.props.priority
    })

    const toggleEditor = () => {
        (!editView ? setEditView(true) : setEditView(false))
    };

    const deleteTicket = e => {
        API.deleteTicket(e.target.value)
            .then(updatePage())
    };

    // These variables are all set up to reformat the dates coming in fromt he database so they're more human readable. There's got to be a more straightforward way to do this - using .toLocaleDateString didn't work I think bc of the way the incoming data is formatted. I also tried using an object for Intl.DateTimeFormat but I had issues incorporating it into the React display.
    const createdDateUnform = props.props.createdAt.split("T")[0];
    const updatedDateUnform = props.props.updatedAt.split("T")[0];
    
    const createdDateArray = createdDateUnform.split("-");
    const createdDateYear = createdDateArray[0];
    const createdDateMonth = createdDateArray[1];
    const createdDateDay = createdDateArray[2];

    const updatedDateArray = updatedDateUnform.split("-");
    const updatedDateYear = updatedDateArray[0];
    const updatedDateMonth = updatedDateArray[1];
    const updatedDateDay = updatedDateArray[2];

    return (
        <div className='block'>
            {!editView ?
                <div className='box' key={props.props.id}>
                    <header className='title is-6'>{props.props.title}</header >
                    <h4>Creator: TBD</h4>
                    <h4>Owner: {props.props.owner}</h4>
                    <h4>Created: {createdDateMonth}/{createdDateDay}/{createdDateYear}</h4> 
                    <h4>Last Updated: {updatedDateMonth}/{updatedDateDay}/{updatedDateYear}</h4>
                    <p>{props.props.label}</p>
                    <p>{props.props.status}</p>
                    <p>{props.props.description}</p>
                    <p>Priority {props.props.priority}</p>
                    <button className='button' value={props.props.id} onClick={toggleEditor}>Edit</button>
                    <button className='button' value={props.props.id} onClick={deleteTicket}>Delete</button>
                </div>
                :
                <EditTicketContext.Provider value = {toggleEditor}>
                    <TicketEditor ticketInfo={ticketInfo} />
                </EditTicketContext.Provider>
            }
        </div>
    )
}

export default Ticket;