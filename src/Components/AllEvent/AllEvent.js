import React from 'react';
import { useHistory } from 'react-router-dom';
import './AllEvent.css';


const AllEvent = ({event}) => {
  console.log(event)
  const history = useHistory()
  const handleCheckoutEvent = () => {
     history.push('/Registration');
  }

    return (
        <div className="col-md-3">
           <img onClick={handleCheckoutEvent} src={require(`../../images/${event.url}`)} alt=""/>
           <h2 onClick={handleCheckoutEvent} className="event-name">{event.name}</h2>
        </div>
    );
};

export default AllEvent;