import React from 'react'
import Button from '../Button/Button'
import InputField from '../InputField/InputField'

const CreateAccount = ({ type, setType }) => {
    return (
        <>
            <div className="loginHeading">
                <h3 className='text40'>Create an Account</h3>
                <p className='text20'>Hi, Welcome to my world 👋</p>
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
                <InputField
                    onclick={() => setType(!type)}
                    placeholder="Your Confirm Password"
                    inputIcon={<img src={`/assets/svg/${type ? 'eyeIcon' : 'hideIcon'}.svg`} alt='' />}
                    type={type ? "text" : "password"}
                />

                <Button name={'Sign Up'} className={'goldenButton mt15'} />
            </div>
        </>
    )
}

export default CreateAccount