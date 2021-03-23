import React from 'react';
import useForm from '../../utils/CustomHooks';
import API from '../../utils/API';

const UserCreator = props => {

    const { inputs, handleInputChange, handleSubmit } = useForm();

    return (
        <div>
            {props.view.userCreatorView ? <section className='modal is-active'>
                <div className='modal-background'></div>
                <div className='modal-content'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                    <input type="text" name="name" onChange={handleInputChange} value={inputs.name} />
                        </label>
                        <br />
                        <label>
                            Email:
                    <input type="text" name="email" onChange={handleInputChange} value={inputs.email} />
                        </label>
                        <br />
                        <label>
                            Password:
                    <input type="password" name="password" onChange={handleInputChange} value={inputs.password} />
                        </label>
                        <br />
                    </form>
                </div>
                <button className='modal-close is-large' aria-label='close' onClick={props.view.toggleUserCreator}></button>
            </section> :
                <div></div>}
        </div>
    )
}

export default UserCreator;