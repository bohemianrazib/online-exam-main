import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import './Auth.css'

const Auth = () => {
    return (
        <div className="row home" style={{display:'flex'}}>
            <div className="app-title col-9">
                <h4>Welcome To</h4>
                <h1>SUST Online</h1>
                 <h1>Examination System</h1>
            </div>
            <div className="auth col-3">
                <SignIn></SignIn>
            </div>
        </div>
        // <div className="home">
        //     <div>
        //         <h4>Welcome To</h4>
        //         <h1>SUST Online</h1>
        //         <h1>Examination System</h1>
        //     </div>
        //     <div className="auth">
        //         <SignIn></SignIn>
        //     </div>
        // </div>
    );
};

export default Auth;