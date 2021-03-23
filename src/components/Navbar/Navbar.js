import React, { useContext, useState } from 'react';
import { ViewContext } from '../../App';
import Logo from './logo.png'

const Navbar = () => {

    const toggleTicketCreator = useContext(ViewContext);

    const [isActive, setisActive] = useState(false);

    return (
        <nav className='navbar block' role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img className="navbar-item" src={Logo} alt='Sledgehammer Logo' />

                <div onClick={() => {
                    setisActive(!isActive)
                }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target='navMenu'>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id='navMenu' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-start'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <div className='button' onClick={toggleTicketCreator}>New Ticket</div>
                        </div>
                    </div>
                </div>


                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className="buttons">
                            <button className="button is-primary">
                                <strong>Sign up</strong>
                            </button>
                            <button className="button is-light">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;