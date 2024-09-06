import React from 'react'
import InputField from '../InputField/InputField'
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import Button from '../Button/Button'

const SignIn = ({ type, setType, setIsAccount }) => {
    return (
        <>
            <div className="loginHeading">
                <h3 className='text40'>Login</h3>
                <p className='text20'>Hi, Welcome back 👋</p>
            </div>

            <div className="loginWidthgoogle">
                <img src="/assets/svg/googleIcon.svg" alt="" />
                Login with Google
            </div>

            <div className="loginLine text15"> or Login with  Email</div>

            <div className="inputGroupForm">
                <InputField type="text" placeholder="Your Email Address" />
                <InputField
                    onclick={() => setType(!type)}
                    placeholder="Your Password"
                    inputIcon={<img src={`/assets/svg/${type ? 'eyeIcon' : 'hideIcon'}.svg`} alt='' />}
                    type={type ? "text" : "password"}
                />
                <div className="rememberMe">
                    <CustomCheckbox labelName={'Remember Me'} />
                    <h3 className='text16' onClick={() => setIsAccount(2)}>Forgot Password?</h3>
                </div>
                <Button name={'Login'} className={'goldenButton mt15'} />
            </div>

        </>
    )
}

export default SignIn