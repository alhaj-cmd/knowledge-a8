import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = ({person}) => {
    console.log(person)
    const {name, coverImg, picture, time, date, title} = person;
    return (
        <div className='mb-2'>
            <Card fluid>
        <Card.Img variant="top" src={coverImg} />
        <Card.Body>
          <Card.Text>
            <div>
                <div className="author d-flex mb-3">
                    <div className="author-title d-flex align-items-center ">
                     
                     <img src={picture} alt="" />
                        <div>
                            <h5>{name}</h5>
                            <p>{date}</p>
                        </div>
                   

                    </div>
                    <span className='icon'>{time} min read <FontAwesomeIcon icon={faBookmark} /></span>

                </div>
                <h4>{title}</h4>
                <span>#beginners  #programming</span>
                <p className='title'>Mark as read</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Person;