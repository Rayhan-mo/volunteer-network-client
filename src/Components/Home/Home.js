import React from 'react';
import { useState } from 'react';
import allEvents from '../../Components/fakeData/FakeData'
import AllEvent from '../AllEvent/AllEvent';
import './Home.css'



const Home = () => {
   const [event, setEvent] = useState(allEvents);

    return (
      <div>
        <div  className="home-search">
        <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
         <nav class="navbar navbar-light bg-light justify-content-center">
             <form action="" class="form-inline">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
             </form>
         </nav>
        </div>
            <div  className="row">
            {
                event.map(event => <AllEvent event={event}></AllEvent>)
            }
          
        </div>
      </div>

    );
};

export default Home;