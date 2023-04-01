import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Question.css'


const Question = () => {
  return (
    <div className='container mb-5'>
      <h2 className='py-5'>Some Questions & Answer</h2>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between State and Props?</Accordion.Header>
          <Accordion.Body>
            <table>
              <tr className='heading'>
                <th>Props</th>
                <th>State</th>

              </tr>
              <tr>
                <td>	Props are read-only.</td>
                <td>Stateless components cannot have State.</td>

              </tr>
              <tr>
                <td>Props are immutable.</td>
                <td>State changes can be asynchronous.</td>

              </tr>
              <tr>
                <td>Props allow you to pass data from one component to other components as an argument.</td>
                <td>State is mutable.</td>

              </tr>
              <tr>
                <td>Props can be accessed by the child component.</td>
                <td>State holds information about the components.</td>

              </tr>
              <tr>
                <td>Props are used to communicate between components.</td>
                <td>State cannot be accessed by child components.</td>

              </tr>
              <tr>
                <td>Stateless component can have Props.</td>
                <td>States can be used for rendering dynamic changes with the component.</td>

              </tr>
            </table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to work useState?</Accordion.Header>
          <Accordion.Body>

            <p><span className='heading'>Example</span> : const [state, setState] = useState([])</p>
            The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are the purpose of useEffect other than fetching data?</Accordion.Header>
          <Accordion.Body>
          <span className='heading'>Example : </span>
          useEffect hook is part of React’s Hooks API. useEffect(callback, [prop, state]) invokes the callback once after mounting, and again after committing the changes to the DOM, if and only if any value in the dependencies array [prop, state] has changed.

            By using the dependencies argument of useEffect(),  independently from the rendering cycles of the component.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does React work?</Accordion.Header>
          <Accordion.Body>
            <span className='heading'>Example : </span>
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front-end library responsible only for the view layer of the application. React is used to create modular user interfaces. It promotes the development of reusable UI components that display dynamic data.

            React uses a declarative paradigm, react application aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;