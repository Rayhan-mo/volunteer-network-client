import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import * as firebase from "firebase/app";


import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: ''
      })
    
      const provider = new firebase.auth.GoogleAuthProvider();
      const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
          const {displayName, photoURL, email} = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL
          }
          setUser(signedInUser);
          console.log(displayName, email, photoURL);
        })
        .catch(err => {
          console.log(err);
          console.log(err.message);
        })
      }
    
      const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
      const hasNumber = input => /\d/.test(input);
    
      const signInUser = event => {
        if(user.isValid){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            console.log(res);
            const createdUser = {...user};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setUser(createdUser);
          })
          .catch(err => {
            console.log(err.message);
            const createdUser = {...user};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setUser(createdUser);
          })
        }
        event.preventDefault();
        event.target.reset();
      }
    return (
        <div className="login-page">
            <h2>Volunteer Network Login</h2><br/>
            <Form onSubmit={signInUser}>
                <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <input type="submit" value="log in"/>
          </Form>
           
            <button className="google-login" onClick={handleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;