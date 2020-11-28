import React from 'react';
import { Link } from 'react-router-dom';

const StudentResultItem = (props) => {
    const{title,date,gainMarks,totalMarks,id}=props.result;

    return (
        <div className="assignments-item d-flex justify-content-between align-items-center">
            <div>
                <h4>{title}</h4>
            </div>
            <div style={{display:'flex'}}>
                <p style={{marginRight:'40px'}}>{date}</p>
                <h4 style={{marginRight:'40px'}}>{gainMarks}<span style={{fontSize:'15px'}}>/{totalMarks}</span></h4>
                <Link to={"/student/results/"+id}><button className="main-button">Details</button></Link>
            </div>
        </div>
    );
};

export default StudentResultItem;