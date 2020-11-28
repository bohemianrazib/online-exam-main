import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeResult from '../../fakeResult';
import './StudentResultItemDetail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StudentResultQuestion from './StudentResultQuestion';

const StudentResultItemDetail = () => {
    const {examId}=useParams();

    let total=0;

    for(let i=0;i<fakeResult.length;i++){
        total=parseInt(fakeResult[i].gainMarks)+total;
    }
    const averageMarks=total/(fakeResult.length+1)
    console.log(total);

    const exastingExamResult=fakeResult.find(res=>res.id===examId);
    const {title,gainMarks,questions}=exastingExamResult;

    return (
        <div>
            <div style={{margin:'30px 20px 20px 30px'}}>
                <div style={{display:'flex'}}>
                <Link to="/student/results"><label><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label></Link>
                    <h4>{title}</h4>
                </div>
               
                <div style={{display:'flex'}}>
                    <div className="marks-box d-flex justify-content-between align-items-center">
                        <h5>Average Marks </h5>
                        <h1>{averageMarks}</h1>
                    </div>
                    <div className="marks-box d-flex justify-content-between align-items-center" style={{marginLeft:'20px'}}>
                        <h5>You've got </h5>
                        <h1>{gainMarks}</h1>
                    </div>
                </div>
                <div style={{marginLeft:'30px'}}>
                    <h3>Question -wise Stat</h3>
                    {
                        questions.map((item,index)=><StudentResultQuestion question={item} index={index}></StudentResultQuestion>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentResultItemDetail;