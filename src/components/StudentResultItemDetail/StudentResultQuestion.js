import React from 'react';

const StudentResultQuestion = (props) => {
    const{name,time}=props.question;

    return (
        <div style={{padding:'5px 10px',marginTop:'20px'}} className="assignments-item d-flex justify-content-between align-items-center">
            <div>
                <p>{props.index+1}. {name}</p>
            </div>
            <div style={{marginRight:'40px',textAlign:'center'}}>
                <h3 style={{color:'#3DAAD9'}}>{time}<span>s</span></h3>
                <p><small>time spent</small></p>
            </div>
        </div>
    );
};

export default StudentResultQuestion;