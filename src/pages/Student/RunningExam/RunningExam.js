import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../../components/User/User';
import fakeExam from '../../../fakeExam';
import logo from '../../../images/logo 1.png';
import './RunningExam.css'

const RunningExam = () => {
    const runningExam=fakeExam.find(exam=>exam.status==='Running');
    console.log(runningExam);
    return (
        <div style={{width:'1300px'}}>
            <div style={{margin:'40px' }} classNam="d-flex justify-content-between align-items-center">
                <div>
                    <User></User>
                </div>
                <div style={{display:'flex'}}>
                    <img src={logo} alt="logo"/>
                    <h4 style={{margin:'10px 0px 0px 20px'}}>Online Examination System</h4>
                </div>
                
            </div>
            <div style={{width:'1125px',margin:'5% 20% 5% 15%'}}>
                <div className="d-flex justify-content-between">
                    <h3>{runningExam.title}</h3>
                    <h2 style={{color:'#F74D4D'}}>20:33</h2>
                </div>
                <br/>
                <div className="running-exam-question">
                    <div>
                        <p>1. {runningExam.questions[0].title}</p>
                    <div>
                        <input style={{width:'30px'}} type="radio" name="option A"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[0]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option B"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[1]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option C"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[2]}</label>
                        <br/>
                        <input style={{width:'30px'}} type="radio" name="option D"/>
                        <label style={{marginLeft:'10px'}}>{runningExam.questions[0].option[3]}</label>
                    </div>
                    <br/>
                    <p>2. {runningExam.questions[1].title}</p>
                    <input style={{width:'400px'}} type="range" name="vol" min="0" max="400"></input>
                    <br/>
                    <p>3. {runningExam.questions[2].title}</p>
                    <textarea type="text" rows="6" cols="40" style={{width:'1000px'}} ></textarea>
                    <br/>
                    <p>4. {runningExam.questions[3].title}</p>
                    <textarea type="text" rows="6" cols="40" style={{width:'1000px'}} ></textarea>
                    </div>
                    <br/>
                    <div style={{marginLeft:'320px'}}>
                        <Link to="/student/dashboard"><button style={{width:'241px',height:'45px',backgroundColor:'rgba(73, 0, 107, 0.8)'}} className="main-button">Finish Exam</button></Link>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default RunningExam;