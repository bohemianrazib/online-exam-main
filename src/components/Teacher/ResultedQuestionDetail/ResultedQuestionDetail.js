import React from 'react';

const ResultedQuestionDetail = (props) => {
    const{name,avgTime,rightAns,wrongAns}=props.question;
    return (
        <div style={{padding:'5px 10px',marginTop:'20px'}} className="assignments-item d-flex justify-content-between align-items-center">
            <div>
                <p>{props.index+1}. {name}</p>
            </div>
            <div style={{display:'flex'}}>
                <div style={{marginRight:'40px',textAlign:'center'}}>
                    <h3 style={{color:'#3DAAD9'}}>{avgTime}<span>s</span></h3>
                    <p><small>Avg. time spent</small></p>
                </div>
                <div style={{marginRight:'40px',textAlign:'center'}}>
                    <h3 style={{color:'#0DAA71'}}>{rightAns}</h3>
                    <p><small>Right Answers</small></p>
                </div>
                <div style={{marginRight:'40px',textAlign:'center'}}>
                    <h3 style={{color:'#F74D4D'}}>{wrongAns}</h3>
                    <p><small>Wrong Answers</small></p>
                </div>
            </div>
            
        </div>
    );
};

export default ResultedQuestionDetail;