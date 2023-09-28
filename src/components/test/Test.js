import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';
import { useParams } from 'react-router-dom';



function Create() {

    const [dictionaryItem, setDictionaryItem]= useState('');
    const [english, setEnglish] = useState('');
    let polish = dictionaryItem.polish

function clickNextButton() {
    //     alert('You clicked me')
        
    api.get(("/randomItem/" + unitId))
    .then((response) => {
        console.log(response.data);
        setDictionaryItem(response.data);
        console.log("Polish from dic item: " + dictionaryItem.polish)
       // setPolish("OKNO");
        //console.log("Polski ustawiony na: " + polish);
    })
}  

    
    
    const unitId = useParams().id;
    console.log("Unit id: " + unitId);
    
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                <h2 className= "sub-header"> Test </h2> &nbsp;
                <label>Polish</label> &nbsp;
                    <input value={polish} readOnly/>
                </Form.Field> &nbsp;
                <Form.Field>
                    <label> English </label> &nbsp;
                    <input value={english} onChange={(e) => setEnglish(e.target.value) }/>
                </Form.Field> &nbsp;
                &nbsp;
                <Button onClick={clickNextButton} type='submit'>Next</Button>
            </Form>
            
        </div>
    )
}
export default Create;



