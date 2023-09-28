import { Table } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig.js';
import { Button, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Read() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        api.get("/dictionaryItems")
            .then((response) => {
                console.log(response.data)
                setItems(response.data);
            })
    }, []);

    function deleteItem(id) {
        api.delete("/deleteItem/" + id)
        const newItems = items.filter(item => item.id !== id)
        setItems(newItems)
    }
        

    const itemsList = items.map(item => {
        return <tr key={item.id}>
            <td >{item.english}</td>
            <td>{item.polish}</td>
            <td>{item.unit.unitName}</td>
            <td>
                <Button size="sm" color="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
            </td>
        </tr>
    });

    return (
        <div>
            <Container fluid>
                <h2 className="sub-header" >Dictionary</h2>
                    <div className="button-right">
                        <Button color="success" tag={Link} to="/createDictionaryItem">Create Dictionary Item</Button>
                    </div>
                <Table style={{textAlign:"left"}}>
                        <thead>
                        <tr>
                            <th>English</th>
                            <th>Polish</th>
                            <th>Unit</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {itemsList}
                        </tbody>
                        </Table>
            </Container>
        </div>
    )
}
