import './GetUsers.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { Table } from 'semantic-ui-react';

const GetUsers = ({users}) => {
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

export default GetUsers