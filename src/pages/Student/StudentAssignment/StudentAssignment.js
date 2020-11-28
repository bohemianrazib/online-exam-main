import React, { useState } from 'react';
import fakeStudentAssignment from '../../../fakeStudentAssignment';
import StudentAssignmentItem from '../../../components/StudentAssignmentItem/StudentAssignmentItem';
import { Link } from 'react-router-dom';

const StudentAssignment = () => {
    const[assignmentType,setAssignmentsType]=useState('due');

    const handleDue=()=>{
        setAssignmentsType('due')
    }
    const handleComplete=()=>{
        setAssignmentsType('finished')
    }

    const exastingAssignments=fakeStudentAssignment.filter(assignment=>assignment.status===assignmentType);
    
    return (
        <div>
            <div style={{margin:'30px 10px 20px 0px',width:'1125px'}}>
                <h3>Assignments</h3>
                <div style={{marginTop:'20px'}} className="selection-button">
                <div style={{display:'flex'}}>
                    <Link onClick={handleDue} className={assignmentType==='due' && 'active-item'}>Due Assignments</Link>
                    <Link onClick={handleComplete} className={assignmentType==='finished' && 'active-item'}>Completed Assignments</Link>
                </div>
                {
                    exastingAssignments.map(assignment=><StudentAssignmentItem key={assignment.id} assignment={assignment}></StudentAssignmentItem>)
                }
            </div>
            </div>
        </div>
    );
};

export default StudentAssignment;