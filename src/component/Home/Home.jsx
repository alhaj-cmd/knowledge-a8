import React, { useEffect, useState } from 'react';
import './Home.css';
import Person from '../Person/Person';



const Home = () => {
   
        const [persons, setPerson] = useState([]);
        useEffect(()=>{
    
            fetch('/public/fakeData.json')
            .then(res => res.json())
            .then(data => setPerson(data))
        },[])
    
   
    return (
        <div>
           <div className="container mt-5 row row-cols-1">
            <div className="card-right  col-md-9">
              {
                    persons.map(person => <Person
                    key={person.id}
                    person = {person}
                    ></Person>)
                }  
             
             
            </div>
            <div className="card-left card col-md-3">
                <h4>aside</h4>

            </div>
           </div>
        </div>
    );
};

export default Home;