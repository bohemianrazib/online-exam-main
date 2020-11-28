import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AllExamItemDetail.css'
import fakeExam from '../../../fakeExam';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExamParticipant from '../ExamParticipant/ExamParticipant';

const AllExamItemDetail = () => {
    const{examId}=useParams();
    const exastingExam=fakeExam.find(exam=>exam.id===examId);
    const{title,time,status,description}=exastingExam;
    const[selcectionItems,setSelectionItems]=useState('participant');

    console.log(exastingExam.participants.reg);
    const handleParticipant=()=>{
        setSelectionItems('participant')
    }
    const handleQuestion=()=>{
        setSelectionItems('question')
    }

    return (
        <div className="allexam-item-detail">
            <div style={{display:'flex'}}>
                <Link to="/teacher/allexam"><label><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label></Link>
                <h3>{title}</h3>
            </div>
            <div style={{width:'1000px',paddingLeft:'50px'}}>
                <h5>{status} {time}</h5>
                <br/>
                <p>{description}</p>
                <br/>
                <button className="main-button" style={{width:'137px',height:'45px',borderRadius:'10px'}}>Copy Link</button>
                <button className="main-button" style={{marginLeft:'20px',marginBottom:'20px',width:'137px',height:'45px',borderRadius:'10px'}}>Edit</button>
            </div>
            <div style={{marginLeft:'20px'}} className="selection-button">
                    <Link onClick={handleParticipant} className={selcectionItems==='participant' && 'active-item'}>Participants</Link>
                    <Link onClick={handleQuestion} className={selcectionItems==='question' && 'active-item'}>Questions</Link>
                </div>
                <div>
                    {
                        selcectionItems==='participant' ?
                        exastingExam.participants.reg.map(reg=><ExamParticipant reg={reg}></ExamParticipant>)
                        : <p style={{margin:'20px 40px'}}>Not uploading</p>
                    }
                    
            </div>
        </div>
    );
};

export default AllExamItemDetail;