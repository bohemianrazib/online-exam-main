import React from 'react';

const ExamParticipant = (props) => {
    const reg=props.reg;
    return (
        <div className="d-flex justify-content-between" style={{width:'900px',margin:'20px 10px 5px 40px',borderBottom:'1px solid gray'}}>
            <div>
                <p>{reg}</p>
            </div>
            <div>
                <button className="main-button" style={{backgroundColor:'#0DAA71',borderRadius:'6px',fontSize:'12px'}}>Answers</button>
                <button className="main-button" style={{backgroundColor:'#F74D4D',marginLeft:'5px',borderRadius:'6px',fontSize:'12px'}}>Block</button>
            </div>
        </div>
    );
};

export default ExamParticipant;