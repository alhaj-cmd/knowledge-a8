import React, { useEffect, useState } from 'react';
import './Home.css';

const loadDataDisplay =()=>{
    // const [data, setData] = useState([]);
    useEffect(()=>{

        fetch('/public/fakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

}

const Home = () => {
    return (
        <div>
           <div className="container mt-5 row row-cols-1">
            <div className="card-right  col-md-9">
             
            </div>
            <div className="card-left card col-md-3">
                <h4>aside</h4>

            </div>
           </div>
        </div>
    );
};

export default Home;