import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './TeacherDashboard.css'
import fakeExam from '../../../fakeExam';
import UpcommingExam from '../../../components/UpcommingExamItem/UpcommingExamItem';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import {Link} from 'react-router-dom'

const TeacherDashboard = () => {

    const runningExam=fakeExam.find(exam=>exam.status==='Running');

    console.log(runningExam);
    return (
        <div style={{width:'1125px',marginTop:'40px'}}>
                <div className="dashboard-next-exam d-flex justify-content-between">
                    <div>
                        <h6>{runningExam.status} Now</h6>
                        <h3>{runningExam.title}</h3>
                    </div>
                    <div>
                        <Link to={"/teacher/allexam/"+runningExam.id}><button className="main-button">See More <ArrowForwardIcon/></button></Link>
                    </div>
                </div>
                <h4>At a glance</h4>
                <div className="dashboard-box" style={{display:'flex'}}>
                    <Link to="/teacher/createexam">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Create a new exam</h5>
                            <CreateNewFolderIcon style={{ fontSize: 50}}/>
                        </div>
                    </Link>
                    <Link to="/teacher/allexam">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Exam Takes</h5>
                            <h1>11</h1>
                        </div>
                    </Link>
                    <Link to="/teacher/assignments">
                        <div className="box d-flex justify-content-between align-items-center">
                            <h5>Assignments</h5>
                            <h1>23</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <h4>Next Exam</h4>
                    {
                        fakeExam.map(exam=><UpcommingExam key={exam.id} exam={exam}></UpcommingExam>)
                    }
                </div>
            </div>
    );
};

export default TeacherDashboard;