
import { Table } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig.js';
import { Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Read() {

    const [units, setUnits] = useState([]);
    useEffect(() => {
        api.get("/units")
            .then((response) => {
                console.log(response.data)
                setUnits(response.data);
            })
    }, []);

    return (
        <div>
            <Table singleLine>
            <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Unit Name</Table.HeaderCell >
                        </Table.Row>
                    </Table.Header>
                {
                    units.map(unit =>{
                        return(
                            <Table.Row>
                                    <Table.Cell>{unit.unitName}</Table.Cell>
                            </Table.Row>
                        )
                    } )
                }
            </Table>
            <Container fluid>
                    <Button color="success" tag={Link} to="/createUnit">Create Unit</Button>
             </Container>
        </div>
    )
}