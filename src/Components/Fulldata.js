import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

export default function Fulldata(props) {
    
    useEffect(()=>{
        console.log(props)
    },[]);

    console.log(props);
    return (
        <div>
            
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Gender</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.array.map((person, key) => (
                        <tr>
                            <td>{key} </td>
                            <td>{person.gender}</td>
                            <td>{person.name.first}</td>
                            <td>{person.name.last}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    )
}
