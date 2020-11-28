import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div style={{width:'700px',margin:'40px'}} >
            <div>
                <h3>Create a new assignment</h3>
                <br/>
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="title" placeholder="Assignment Title"/>
                    </div>
                    <div className="form-group">
                        <label >Instructions of Students</label>
                        <textarea rows="5"></textarea>
                    </div>
                    <div>
                        <label>Date & Time</label>
                        <br/>
                        <div style={{width:'700px'}}>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                timeInputLabel="Time:"
                                dateFormat="MM/dd/yyyy h:mm aa"
                                showTimeInput
                                />
                        </div>
                    </div>
                    <div >
                        <label>Select Audiance</label>
                        <div className="form-inline">
                            <select   name="cars" style={{width:'220px'}}>
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
                </form>
                <br/>
                <Link to="/teacher/assignments"><button className="main-button" style={{width:'120px',height:'50px'}} >Next <ArrowForwardIcon/></button></Link>
            </div>
        </div>
    );
};

export default CreateAssignment;