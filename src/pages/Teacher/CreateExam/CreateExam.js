import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import AddQuestion from '../AddQuestion/AddQuestion';
import './CreateExam.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const CreateExam = () => {

    const [startDate, setStartDate] = useState(new Date());
    const[hide,setHide]=useState(false);

    const handleHide=()=>{
        setHide(true);
    }

    console.log(hide);
    return (
        <div style={{width:'700px',margin:'40px'}} >
            <div className={hide && 'hide'}>
                <h3>Create a new exam</h3>
                <br/>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea rows="5"></textarea>
                    </div>
                    <label>Date & Time</label>
                        
                    <div className="date-time">
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            timeInputLabel="Time:"
                            dateFormat="MM/dd/yyyy h:mm aa"
                            showTimeInput
                            />
                    </div>
                    <div >
                        <label>Select Audiance</label>
                        <div className="form-inline">
                            <select  name="cars" style={{width:'220px'}}>
                                <option value="Department">Department</option>
                                <option value="EEE">EEE</option>
                                <option value="CSE">CSE</option>
                                <option value="IPE">IPE</option>
                                <option value="ChE">ChE</option>
                            </select>
                            <select  name="cars" style={{marginLeft:'20px',width:'220px'}}>
                                <option value="Semister">Semister</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4nd">4nd</option>
                            </select>
                            <select  name="cars" style={{marginLeft:'20px',width:'220px'}}>
                                <option value="Course">Course</option>
                                <option value="CSE-1001">CSE-1001</option>
                                <option value="CSE-1002">CSE-1002</option>
                                <option value="CSE-1003">CSE-1003</option>
                            </select>
                        </div>
                    </div>
                    <div >
                        <label>Password</label>
                        <input type="password" placeholder="Password"/>
                    </div>
                </form>
                <br/>
                <button className="main-button" style={{width:'120px',height:'50px'}} onClick={handleHide}>Next <ArrowForwardIcon/></button>
            </div>
            <div className={!hide && 'hide'}>
                <AddQuestion></AddQuestion>
            </div>
        </div>
    );
};

export default CreateExam;