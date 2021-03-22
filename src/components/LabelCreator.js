import React, { useContext } from 'react';
import useForm from '../utils/CustomHooks';
import API from '../utils/API';
import { LabelContext } from './TicketCreator'

const LabelCreator = () => {

    const toggleLabelCreator = useContext(LabelContext);

    const newLabel = () => {
        API.createLabel(inputs);

        alert(`New Label ${inputs.name} Created!`);

        toggleLabelCreator();
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(newLabel);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="name" placeholder='Enter a new label' onChange={handleInputChange} value={inputs.name} />
            </label>
            <button className='button' type='submit'>Submit</button>
        </form>
    )

}

export default LabelCreator;