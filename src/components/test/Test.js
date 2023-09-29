import React, { useState} from 'react';
import { Button, Form, Container} from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import AppNavbar from '../AppNavbar';



function Create() {

    const unitId = useParams().id;

    const [dictionaryItem, setDictionaryItem]= useState('');
    const [englishInput, setEnglishInput] = useState('');
    const [info, setInfo] = useState('');
    const [correctAswers, setCorrectAnwers] = useState(0);
    const [anwers, setAnswers] = useState(0);
    const [showResult, setShowResult] = useState(false)


    let polish = dictionaryItem.polish;
    let englishCorrect = dictionaryItem.english;
    let maxQuestions = 5;
    let incorrectAnswers = maxQuestions - correctAswers;

function onClickNext() {
    //     alert('You clicked me')

    if (anwers === maxQuestions) {
        setShowResult(true)
        
    } else {
        api.get(("/randomItem/" + unitId))
        .then((response) => {
            console.log(response.data);
            setDictionaryItem(response.data);
            console.log("Polish from dic item: " + dictionaryItem.polish)

                if (englishCorrect === englishInput) {
                    let temp = correctAswers
                    setCorrectAnwers(temp +1)
                    if(anwers != 0) {
                        setInfo('Correct Answer! 😃 ')
                    }
        
                } else {
                    if(anwers != 0) {
                        setInfo('Inccorect Answer! 😔 ')
                    }
                }
         
            setAnswers(anwers + 1);
            setEnglishInput('');

    })
    }
}  
    
    return (
        
        <div>
            <AppNavbar/>
            {!showResult ? (
                <Form className="create-form">
                    <Form.Field>
                    <h2 className= "sub-header"> Test </h2> &nbsp;    
                        <div style={{textAlign:"left"}}>
                            <span >Question: </span>
                            <span>{anwers}</span>
                            <span >/{maxQuestions}</span>
                        </div>  
                    
                    <label>Polish</label> &nbsp;
                        <input value={polish} readOnly/>
                    </Form.Field> &nbsp;
                    <Form.Field>
                        <label> English </label> &nbsp;
                        <input value={englishInput} onChange={(e) => setEnglishInput(e.target.value) }/>
                    </Form.Field> &nbsp;
                    &nbsp;
                    <Button className = "submit-button" onClick={onClickNext} type='submit'>
                    {anwers === 0 ? 'Start' : 'Next'}
                    </Button>
                    <h5> {info} </h5> &nbsp;
                </Form>

            ):(
                <div className="main">
                    <h2 className="main-header">Test results: </h2>
                        <p>
                        Total Question: <span>{maxQuestions}</span>
                        </p>
                        <p>
                        Correct Answers:<span> {correctAswers}</span>
                        </p>
                        <p>
                        Wrong Answers:<span> {incorrectAnswers} </span>
                        </p>
                </div>

            )}
        </div>
        )}

export default Create;

