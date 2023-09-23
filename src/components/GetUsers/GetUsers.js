import './GetUsers.css';
import { Table } from 'semantic-ui-react';
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

    return (
        <div>
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
        </div>
    )
}
