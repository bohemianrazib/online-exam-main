import React from 'react';
import StudentFeedbackItem from '../../../components/Teacher/StudentFeedbackItem/StudentFeedbackItem';
import studentFeedbacksData from '../../../TeacherData/fakeStudentFeedbacks'; 

const StudentFeedbacks = () => {
    console.log(studentFeedbacksData);
    return (
        <div style={{marginTop:'50px',width:'1125px'}}>
            <h2>Student Feedbacks</h2>
            <input style={{width:'400px',margin:'20px 0px'}} className="form-control" type="text"/>
            {
                studentFeedbacksData.map(feedback=><StudentFeedbackItem key={feedback.id} feedback={feedback} ></StudentFeedbackItem>)
            }
        </div>
    );
};

export default StudentFeedbacks;