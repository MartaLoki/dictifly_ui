import { Table, Container, Button } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig.js';
import AppNavbar from '../AppNavbar';

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
            <td>
                <Button className="submit-button" size="sm" color="success" >Test Results</Button>
            </td>
        </tr>
    });

    return (
        <div> 
            <AppNavbar/>
            <Container fluid>
            
            <h2 className="sub-header" >Users</h2>
            <Table style={{textAlign:"center"}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Test Results</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {usersList}
                    </tbody>
                    </Table>
        </Container>

        </div>
        
        

    )
}
