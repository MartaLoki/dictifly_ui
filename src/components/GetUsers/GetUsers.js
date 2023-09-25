import './GetUsers.css';
import { Table, Container, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig.js';

export default function Read() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get("/users")
            .then((response) => {
                console.log(response.data)
                setUsers(response.data);
            })
    }, []);

    const usersList = users.map(user => {
        return <tr key={user.id}>
            <td >{user.name}</td>
            <td >{user.surname}</td>
            <td >{user.age}</td>
        </tr>
    });

    return (
        <Container fluid>
            <h2 className="sub-header" >Users</h2>
                <div className="button-right">
                </div>
            <Table style={{textAlign:"left"}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {usersList}
                    </tbody>
                    </Table>
        </Container>



        /* <div>
            <Table singleLine>
            <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                {
                    users.map(user =>{
                        return(
                            <Table.Row>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.surname}</Table.Cell>
                                    <Table.Cell>{user.age}</Table.Cell>
                            </Table.Row>
                        )
                    } )
                    
                }
            </Table>
        </div> */
    )
}
