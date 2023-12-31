import React, { useState } from 'react';
import { Button, Form} from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';
import AppNavbar from '../AppNavbar';

export default function Create() {
    const [unitName, setUnitName] = useState('');

    const postData = () => {
        api.post(("/createUnit"), {
            unitName,
        })
        setUnitName("");
        }
    

    return (
        
        <div>
        <AppNavbar/>
            <Form className="create-form">
                <h2 className="header">Create new Unit</h2> &nbsp;
                <Form.Field>
                    <label>Unit Name</label> &nbsp;
                    <input value={unitName} onChange={(e) => setUnitName(e.target.value) }/>
                </Form.Field> &nbsp; &nbsp;
                <Button className ="submit-button" onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
