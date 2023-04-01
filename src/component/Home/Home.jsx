import React, { useEffect, useState } from 'react';
import './Home.css';
import Person from '../Person/Person';
import Aside from '../Aside/Aside';
import { toast } from 'react-toastify';





const Home = () => {


    const [carts, setCarts] = useState([]);

    const [persons, setPerson] = useState([]);
    const [readTimes, setReadTimes] = useState([]);

    useEffect(() => {

        fetch('/public/fakeData.json')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])


    // handlecount blogs
    const handleCount = (blogs) => {


        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        const newCart = [...carts, blogs];
        setCarts(newCart);


    };


    // readtime set count
    const readTimeCount = (readTime) => {
        // console.log(readTime);
        const setTime = [...readTimes, readTime];
        setReadTimes(setTime)
    }

    return (
        <div className='container'>
            <div className="mt-5 row row-cols-1">
                <div className="card-right  col-md-9">
                    {
                        persons.map(person => <Person
                            key={person.id}
                            person={person}
                            handleCount={handleCount}

                            readTimeCount={readTimeCount}

                        ></Person>)
                    }


                </div>
                {/* Aside card calculation */}
                <div className="card-left col-md-3">
                    <Aside carts={carts}
                        readTimes={readTimes}
                    ></Aside>

                </div>
            </div>
        </div>
    );
};

export default Home;