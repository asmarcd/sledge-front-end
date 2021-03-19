import React, { useContext, useState } from 'react';
import API from '../utils/API';
import { UpdatePageContext } from './TicketDisplay';
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

    return (
        <div>
            {!editView ?
                <div key={props.props.id}>
                    <h3>{props.props.title}</h3>
                    <h4>Creator: TBD Owner: {props.props.owner}</h4>
                    <h4>Created: {props.props.createdAt} Last Updated: {props.props.updatedAt}</h4>
                    <p>{props.props.label}</p>
                    <p>{props.props.status}</p>
                    <p>{props.props.description}</p>
                    <p>Priority {props.props.priority}</p>
                    <button value={props.props.id} onClick={toggleEditor}>Edit</button>
                    <button value={props.props.id} onClick={deleteTicket}>Delete</button>
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