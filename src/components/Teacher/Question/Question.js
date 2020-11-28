import React from 'react';
import { Link } from 'react-router-dom';
import './Question.css'


const Question = () => {
    return (
        <div className="question">
            <div className="form-group">
                <input type="text" placeholder="Question"/>
            </div>
            <h5>Select Answer Type</h5>
            <div className="select-answer-type" style={{width:'550px'}}>
                <Link style={{backgroundColor:'purple',color:'white',background:'purple',padding:'12px'}}>MCQ</Link>
                <Link style={{marginLeft:'20px',padding:'10px',color:'purple'}}>Written</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Code</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Dropdown</Link>
                <Link style={{marginLeft:'20px',borderLeft:'2px solid purple',padding:'10px',color:'purple'}}>Range Selector</Link>
            </div>
            <br/>
            <div className="form-inline">
                <input type="text" style={{width:'190px'}} placeholder="Option A"/>
                <input type="text" style={{width:'190px',marginLeft:'10px'}} placeholder="Option B"/>
                <input type="text" style={{width:'190px',marginLeft:'10px'}}  placeholder="Option C"/>
                <input type="text" style={{width:'190px',marginLeft:'10px'}} placeholder="Option D"/>
            </div>
            <br/>
            <div className="marks-input form-inline">
                <h3>Marks</h3>
                <input type="number" name="marks" defaultValue="5"/>
            </div>
        </div>
    );
};

export default Question;