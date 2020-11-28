import React from 'react';
import './StudentFeedbackItem.css'
import ReplyIcon from '@material-ui/icons/Reply';

const StudentFeedbackItem = (props) => {
    console.log(props);
    const{img,name,reg,date,description}=props.feedback;

    return (
        <div className="student-feedback-item">
            <div className="student-feedback-item-header">
                <img style={{width:'50px',height:'50px',borderRadius:'50%'}} src={img} alt={name}/>
                <h4>{name}</h4>
                <h5>({reg})</h5>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div className="d-flex justify-content-between">
                 <h4>{date}</h4>
                <button className="main-button" style={{color:'black',backgroundColor:' rgb(233, 224, 224)',fontSize:'20px',height:'50px',width:'150px'}}>Reply <ReplyIcon/></button>
            </div>
        </div>
    );
};

export default StudentFeedbackItem;