import React from 'react';
import StudentMyExamList from '../../../components/StudentMyExamList/StudentMyExamList'
import fakeExam from '../../../fakeExam';
import './StudentMyExam.css'

const StudentMyExam = () => {
    return (
        <div className="student-exam-container">
            <div style={{margin:'30px 10px 20px 0px',width:'1125px'}}>
                <StudentMyExamList exam={fakeExam}></StudentMyExamList>
            </div>
        </div>
    );
};

export default StudentMyExam;