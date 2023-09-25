import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';

export default function Create() {

    const createTest = () => {
        api.post(("/createTest"), {unitName})
        .then((response) => {
            console.log(response.data)
            setDictionaryItem(response.data)
        })
        }


    return (
        <div>
            <Form className="create-form">
                <h2 className="header">Test</h2> &nbsp;
                
             
            </Form>
        </div>
    )
}