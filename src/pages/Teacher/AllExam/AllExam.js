import React from 'react';
import AllExamList from '../../../components/Teacher/AllExamList/AllExamList';
import fakeExam from '../../../fakeExam'
import {Link} from 'react-router-dom';

const AllExam = () => {
    return (
        <div style={{margin:'30px 10px 20px 0px',width:'1125px'}}>
            <div style={{float:'right',marginBottom:'20px'}}>
                <Link to="/teacher/createexam"><button style={{width:'300px',height:'50px',marginRight:'50px'}} className="main-button">Create a new exam</button></Link>
            </div>
            <div>
                <AllExamList exam={fakeExam}></AllExamList>
            </div>
        </div>
    );
};

export default AllExam;