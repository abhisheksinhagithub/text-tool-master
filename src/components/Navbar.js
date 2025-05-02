import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>

            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/control"><i className="ri-user-voice-line"></i> Control</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/shortcuts"><i className="ri-keyboard-line"></i> Shortcuts</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">{props.about}</NavLink>
                        </li>

                    </ul>

                    <div className="form-check form-switch">
                        <input onClick={props.toggleMode} checked={props.mode === 'dark'} className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" style={{
                            outline: '1px solid black',
                            boxShadow: 'none',
                            transition: 'border-color 0.15s ease-in-out'
                        }} />
                        <label className="form-check-label" htmlFor="switchCheckDefault"> {props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About'
}