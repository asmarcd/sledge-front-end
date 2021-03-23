import React from 'react';
import useForm from '../../utils/CustomHooks';
import API from '../../utils/API';

const UserCreator = props => {

    const createUser = () => {
        API.createUser(inputs)

        alert(`New User "${inputs.name}" Created!`)

        props.view.toggleUserCreator();
    }

    const { inputs, handleInputChange, handleSubmit } = useForm(createUser);

    return (
        <div>
            {props.view.userCreatorView ? <section className='modal is-active'>
                <div className='modal-background'></div>
                <div className='modal-content box'>
                    <header className='title'>Create your Account:</header>
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
                        <br />
                        <button className='button is-success' type='submit'>Create User</button>
                        <button className='button' onClick={props.view.toggleUserCreator}>Cancel</button>
                    </form>
                </div>
                <button className='modal-close is-large' aria-label='close' onClick={props.view.toggleUserCreator}></button>
            </section> :
                <div></div>}
        </div>
    )
}

export default UserCreator;