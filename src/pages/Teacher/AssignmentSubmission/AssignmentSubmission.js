import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import teacherFakeAssignment from '../../../TeacherData/teacherAssignments';
import { Link, useParams } from 'react-router-dom';
import AssignmentSubmissionList from '../../../components/Teacher/AssignmentSubmissionList/AssignmentSubmissionList';

const AssignmentSubmission = () => {


    const{assignmentId}=useParams();
    const exastingAssignment=teacherFakeAssignment.find(assignment=>assignment.id===assignmentId);
     console.log(exastingAssignment);
     const{title,date,submission}=exastingAssignment;

    return (
        <div style={{width:'1000px',marginTop:'50px'}}>
            <div style={{display:'flex'}}>
            <Link to="/teacher/assignments"><label><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label></Link>
                <h3>{title}</h3>
            </div>
            <div>
                <h5 style={{marginLeft:'30px',color:'#49006B'}}>Dedline {date}</h5>
                <AssignmentSubmissionList submission={submission}></AssignmentSubmissionList>
            </div>
        </div>
    );
};

export default AssignmentSubmission;