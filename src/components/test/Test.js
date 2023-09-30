import React, { useState} from 'react';
import { Button, Form} from 'semantic-ui-react'
import api from '../../api/axiosConfig.js';
import { useParams } from 'react-router-dom';
import AppNavbar from '../AppNavbar';



function Create() {

    const unitId = useParams().id;

    const [dictionaryItem, setDictionaryItem]= useState('');
    const [englishInput, setEnglishInput] = useState('');
    const [info, setInfo] = useState('');
    const [correctAswers, setCorrectAnwers] = useState(0);
    const [answers, setAnswers] = useState(0);
    const [showResult, setShowResult] = useState(false)


    let polish = dictionaryItem.polish;
    let englishCorrect = dictionaryItem.english;
    let maxQuestions = 10;
    let incorrectAnswers = maxQuestions - correctAswers;

function onClickNext() {
    //     alert('You clicked me')
    
    if (englishCorrect === englishInput) {
        let temp = correctAswers
        setCorrectAnwers(temp +1)
        if(answers != 0) {
            setInfo('Correct Answer! 😃 ')
        }

    } else {
        if(answers != 0) {
            setInfo('Inccorect Answer! 😔 ')
        }
    }
    setTimeout(() => {setInfo(true);}, 2000);
    

    if (answers === maxQuestions) {
        setShowResult(true)
        
    } else {
        api.get(("/randomItem/" + unitId))
        .then((response) => {
            console.log(response.data);
            setDictionaryItem(response.data);
            console.log("Polish from dic item: " + dictionaryItem.polish)
         
            setAnswers(answers + 1);
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
                            <span>{answers}</span>
                            <span >/{maxQuestions}</span>&nbsp;  
                        </div>  
                    
                    <label>Polish</label> &nbsp;
                        <input value={polish} readOnly/>
                    </Form.Field> &nbsp;
                    <Form.Field>
                        <label> English </label> &nbsp;
                        <input value={englishInput} onChange={(e) => setEnglishInput(e.target.value) }/>
                    </Form.Field>
                    <h5>  &nbsp;{info} </h5> 
                    <Button disabled={!englishInput && answers!=0} className = "submit-button" onClick={onClickNext} type='submit'>
                        {answers === 0 ? 'Start' : 'Next'}
                    </Button>
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
