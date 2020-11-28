import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './StudentAssignmentSubmit.css'
import fakeStudentAssignment from '../../fakeStudentAssignment'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StudentAssignmentSubmit = () => {
    const{assignmentId}=useParams();
    console.log(fakeStudentAssignment);
    console.log(assignmentId);

    const exastingAssignment=fakeStudentAssignment.find(assignment=>assignment.id===assignmentId);
    const{title,status,date,description}=exastingAssignment;

    const handleSubmit=()=>{
       console.log("submit");
    }

    return (
        <div>
            <div style={{margin:'30px 10px 30px 30px',width:'1000px'}}>
                <div style={{display:'flex'}}>
                <Link to="/student/assignments"><label><ArrowBackIcon style={{ fontSize: 30,marginRight:'10px',cursor:'pointer' }}/></label></Link>
                    <h3>{title}</h3>
                </div>
                
                <div style={{marginLeft:'20px',padding:'20px',width:'900px'}}>
                    <h5 style={{color:'blue',marginBottom:'20px'}}>{status} {date}</h5>
                    <p>{description}</p>
                    <label style={{color:'blue'}}> Attach Your Work</label>
                    <br/>
                   
                    <input style={{padding:'40px'}} type="file" />
                    <br/>
                    <br/>
                    <Link to="/student/assignments"><button className="main-button" onClick={handleSubmit}>Submit</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default StudentAssignmentSubmit;