import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from  '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt=""/>
             <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/donation">Donation</Link>
                <Link className="link" to="/event">Event</Link>
                <Link className="link" to="/blog">Blog</Link>
            </nav>
            <Button className='register-button'><Link to="/Registration" className="register-link">Register</Link></Button>
            <Button className="admin-button" variant="warning">Admin</Button>
        </div>
    );
};

export default Header;