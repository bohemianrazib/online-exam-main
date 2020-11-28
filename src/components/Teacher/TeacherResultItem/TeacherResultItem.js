import React from 'react';
import { Link, useParams } from 'react-router-dom';
import teacherResult from '../../../TeacherData/TeacherFakeResult.js'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ResultedQuestionDetail from '../ResultedQuestionDetail/ResultedQuestionDetail.js';

const TeacherResultItem = () => {
    const{resultId}=useParams();
    const exastingResult=teacherResult.find(res=>res.id===resultId);
    const{title,aveMarks,heightMarks,particitants,questions}=exastingResult;

    console.log(exastingResult.questions);
    return (
        <div style={{width:'1000px',marginTop:'40px'}}>
            <div style={{display:'flex'}}>
            <Link to="/teacher/results"><label><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label></Link>
                <h3>{title}</h3>
            </div>
            <div style={{display:'flex',marginLeft:'30px'}}>
                <div className="box d-flex justify-content-between align-items-center">
                    <h5>Average Mark</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)'}}>{aveMarks}</h1>
                </div>
                <div className="box d-flex justify-content-between align-items-center">
                    <h5>Participants</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)'}}>{particitants}</h1>
                </div>
                <div className="box d-flex justify-content-between align-items-center">
                    <h5>Height Marks</h5>
                    <h1 style={{color:'rgba(113, 0, 167, 0.8)'}}>{heightMarks}</h1>
                </div>
                
            </div>
            <div style={{marginLeft:'40px'}}>
                <h3>Question-wise Stat</h3>
                {
                    questions.map((item,index)=><ResultedQuestionDetail index={index} question={item}></ResultedQuestionDetail>)
                }
            </div>
        </div>
    );
};

export default TeacherResultItem;