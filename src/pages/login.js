import React, { useState } from 'react';
import '../styles/globals.css'
import { EyeIcon, HideEye } from './icons';
import SignIn from '@/components/LoginPage/SignIn';
import CreateAccount from '@/components/LoginPage/CreateAccount';

const Login = () => {

    const [type, setType] = useState(false);
    const [isAccount, setIsAccount] = useState(1);

    return (
        <div className="loginFromWrapper">
            <form>
                <div className="leftLoginBox">
                    {isAccount === 1 && <SignIn type={type} setType={setType} isAccount={isAccount} setIsAccount={setIsAccount} />}
                    {isAccount === 2 && <CreateAccount type={type} setType={setType} isAccount={isAccount} setIsAccount={setIsAccount} />}
                </div>

                <div className="rightLoginBox">
                    <img src="/assets/img/loginImage.gif" alt="" />
                </div>
            </form>
        </div>
    );
};

export default Login;
