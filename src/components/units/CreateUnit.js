import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';


export default function Create() {
    const [unitName, setUnitName] = useState('');

    const postData = () => {
        api.post(("/createUnit"), {
            unitName,
        })
        }
    

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Unit Name</label> 
                    
                    <input value={unitName} onChange={(e) => setUnitName(e.target.value) }/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}