import React, { useContext } from 'react';
import API from '../utils/API';
import { UpdatePageContext } from './TicketDisplay';

const Ticket = props => {

    const updatePage = useContext(UpdatePageContext);

    const editTicket = e => {
        console.log('testing');
    };

    const deleteTicket = e => {
        API.deleteTicket(e.target.value)
            .then(updatePage())
    };

    return (
        <div key={props.props.id}>
            <h3>{props.props.title}</h3>
            <h4>Creator: TBD Owner: {props.props.owner}</h4>
            <h4>Created: {props.props.createdAt} Last Updated: {props.props.updatedAt}</h4>
            <p>{props.props.label}</p>
            <p>{props.props.status}</p>
            <p>{props.props.description}</p>
            <p>Priority {props.props.priority}</p>
            <button value={props.props.id} onClick={editTicket}>Edit</button>
            <button value={props.props.id} onClick={deleteTicket}>Delete</button>
        </div>
    )
}

export default Ticket;