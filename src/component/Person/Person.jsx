import React from 'react';
import Card from 'react-bootstrap/Card';
import './Person.css'

const Person = ({person}) => {
    console.log(person)
    const {name, coverImg, picture, time, date, title} = person;
    return (
        <div>
            <Card fluid>
        <Card.Img variant="top" src={coverImg} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <div>
                <div className="author d-flex justify-content-around">
                    <div className="author-title d-flex">
                        <img src={picture} alt="" />
                        <div>
                            <p>{name}</p>
                            <p>{date}</p>
                        </div>

                    </div>
                    <p>{time} min read</p>

                </div>
                <h4>{title}</h4>
                <p>Mark as read</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Person;