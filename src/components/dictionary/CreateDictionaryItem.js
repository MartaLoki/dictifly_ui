import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';
import {Link} from 'react-router-dom';
import AppNavbar from '../AppNavbar';

export default function Create() {
    const [polish, setPolish] = useState('');
    const [english, setEnglish] = useState('');
    const [unit, setUnit] = useState('');

    const postData = () => {
        api.post(("/createDictionaryItem"), {
            english,
            polish,
            unit
        })
        setPolish("");
        setEnglish("");
        }

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
            <AppNavbar/>
            <Form className="create-form">
                <Form.Field>
                <h2 className= "sub-header"> Add new Dictionary Item</h2> &nbsp;
    
                <label>English</label> &nbsp;
                    <input value={english} onChange={(e) => setEnglish(e.target.value) }/>
                </Form.Field> &nbsp;
                <Form.Field>
                    <label>Polish</label> &nbsp;
                    <input value={polish} onChange={(e) => setPolish(e.target.value) }/>
                </Form.Field> &nbsp;
                <Form.Field>
                    <label>Unit Name</label> &nbsp;
                    <select   onChange={
                        (e) => setUnit((e.target.value))} >
                        <option value=" Select Unit "> -- Select Unit-- </option>
                        {units.map((unit, i) => <option key={i} value={unit.id} >{unit.unitName}</option>)}
                    </select>
                        
                </Form.Field>
                &nbsp;
                <Button className="submit-button" onClick={postData} type='submit'>Submit</Button>
                
                
            </Form>
        </div>
    )
}

