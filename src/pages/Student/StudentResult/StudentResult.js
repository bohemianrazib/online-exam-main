import React from 'react';
import fakeResult from '../../../fakeResult';
import StudentResultItem from '../../../components/StudentResultItem/StudentResultItem';

const StudentResult = () => {
    return (
        <div>
            <div style={{width:'1125px',margin:'30px 10px 20px 0px'}}>
                <h4 style={{marginBottom:'10px'}}>Results</h4>
                {
                    fakeResult.map(res=><StudentResultItem key={res.id} result={res}></StudentResultItem>)
                }
            </div>
        </div>
    );
};

export default StudentResult;