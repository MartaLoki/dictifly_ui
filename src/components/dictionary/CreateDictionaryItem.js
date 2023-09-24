import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';

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
            <Form className="create-form">
                <Form.Field>
                    <label>English</label> 
                    <input value={english} onChange={(e) => setEnglish(e.target.value) }/>
                </Form.Field> &nbsp;
                <Form.Field>
                    <label>Polish</label> 
                    <input value={polish} onChange={(e) => setPolish(e.target.value) }/>
                </Form.Field> &nbsp;
                <Form.Field>
                    <label>Unit</label> 
                    <select   onChange={
                        (e) => setUnit((e.target.value))} >
                        {units.map((unit, i) => <option key={i} value={unit.id} >{unit.unitName}</option>)}
                    </select>
                        

  
               
               
                

                </Form.Field> &nbsp;

                <Button onClick={postData} type='submit'>Submit</Button>
                
            </Form>
        </div>
    )
}

{/* <select>
onChange={e => this.setUnit({selectedUnit: e.target.value})}

</select> */}

