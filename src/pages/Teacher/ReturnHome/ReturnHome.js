import React from 'react';
import home from '../../../images/home.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './ReturnHome.css'
import { Link } from 'react-router-dom';

const ReturnHome = () => {
    return (
        <div className="return-home">
          <img src={home} alt="home"/>
          <h2>Exam Created</h2>
          <Link to="/teacher/dashboard"><button className="main-button" style={{marginTop:'20px'}}>Return to home <ArrowForwardIcon/></button></Link>  
        </div>
    );
};

export default ReturnHome;