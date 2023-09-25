
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

    const unitsList = units.map(unit => {
        return <tr key={unit.id}>
            <td>{unit.unitName}</td>
            <td><Button size="sm" color="success"  tag={Link} to="/createTest">Test</Button></td>
        </tr>
    });

    return (

        <div>
        <Container fluid>
            <h2 className="sub-header" >Units</h2>
                <div className="button-right">
                <Button color="success" tag={Link} to="/createUnit">Create Unit</Button>
                </div>
            <Table style={{textAlign:"center"}}>
                    <thead>
                    <tr>
                        <th>Units</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {unitsList}
                    </tbody>
                    </Table>
        </Container>
    </div>
    )
}
