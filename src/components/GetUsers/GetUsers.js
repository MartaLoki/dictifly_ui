import { Table, Container } from 'semantic-ui-react';
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
            <td >{user.age}</td>
        </tr>
    });

    return (
        <div> 
            <AppNavbar/>
            <Container fluid>
            
            <h2 className="sub-header" >Users</h2>
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

        </div>
        
        

    )
}
