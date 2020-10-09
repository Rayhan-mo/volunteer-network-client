import React from 'react';
import { useState } from 'react';

import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    
    const handleRegistration = () =>{
        const formData= {};
  
        fetch('http://localhost:4000/addVolunteer', 
        {method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
    return (
        <div className="registration-page">
            <h2>Registrater as a Volunteer</h2>
        <Form action="/addVolunteer" method="post">
        <Form.Group controlId="formGroupName">
            <Form.Label>Full name</Form.Label>
             <Form.Control type="text" placeholder="Enter your name" />
         </Form.Group>
         <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
         <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
         <Form.Group controlId="formGroupDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
         </Form.Group>
         <Form.Group controlId="formGroupDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
         </Form.Group>
          <button type="submit" className="registration-button" onClick={handleRegistration}>Registration</button>
          <button type="submit" className="registration-done"><Link to="/Login" className="register-to-login"> Already Registerd ?</Link></button>
        </Form>
        </div>
    );
};

export default Registration;