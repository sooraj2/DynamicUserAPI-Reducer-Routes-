import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
//import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { MyContext } from '../Context';


function Nav(props) {


    const {state, dispatch} = useContext(MyContext);

    
    const [numrows, setNumrows] = useState({});

    const handlechange = (e) => {
        if(e.target.name==="rows")
        setNumrows({ ...numrows, [e.target.name]: parseInt(e.target.value) });
        else 
        setNumrows({ ...numrows, [e.target.name]: e.target.value});
        
    }
    
    const handleSubmit = () => {
        console.log(numrows);
       // props.setCount(parseInt(numrows.rows));
        dispatch({ type: "set", numrows });
       console.log(state);
    }

    // useEffect(() => {
    //     console.log(numrows);

    // }, [numrows]);


    return (

        <Container>

            <Form className="mt-5" >

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" placeholder="Enter something" name="note" value={numrows.note} onChange={handlechange} />
                    <Form.Text className="text-muted">
                        your feedback would be appreceated
                    </Form.Text>
                </Form.Group>


                <Form.Control as="select" className="mb-3"  aria-label="Default select example"
                    name="rows" value={numrows.rows} onChange={handlechange}
                >
                    <option>select number of records</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </Form.Control>

                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>

            </Form>



            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>{<ArrowRight />}</th>
                        <th>Title</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.names.map((name, key) => (
                        <tr>
                            <td>{key} </td>
                            <td>{name.title}</td>
                            <td>{name.first}</td>
                            <td>{name.last}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Nav

