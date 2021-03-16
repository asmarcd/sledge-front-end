import React from 'react';
import useForm from '../utils/CustomHooks';
import API from '../utils/API';

const LabelCreator = (setNewLabelView) => {

    const newLabel = () => {
        API.createLabel(inputs);

        alert(`New Label ${inputs.name} Created!`);

        setNewLabelView(false);
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(newLabel);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="name" placeholder='Enter a new label' onChange={handleInputChange} value={inputs.name} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )

}

export default LabelCreator;