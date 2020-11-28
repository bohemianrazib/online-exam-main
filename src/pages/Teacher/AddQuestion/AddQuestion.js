import React, { useState } from 'react';
import Question from '../../../components/Teacher/Question/Question';
import './AddQuestion.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ReturnHome from '../ReturnHome/ReturnHome';

const AddQuestion = () => {

    const[hide,setHide]=useState(false);

    const handleHide=()=>{
        setHide(true);
    }


    return (
        <div  style={{width:'1125px'}}>
            <div className={hide && 'hide'}>
                <h2>Add Question</h2>
                <br/>
                <Question></Question>
                
                <div className="add-question">
                    <h5>Add Question</h5>
                </div>
                <button className="main-button" onClick={handleHide} style={{marginTop:'20px',width:'120px',height:'50px'}}>Next <ArrowForwardIcon/></button>
            </div>
            <div className={!hide && 'hide'}>
                <ReturnHome></ReturnHome>
            </div>
        </div>
    );
};

export default AddQuestion;