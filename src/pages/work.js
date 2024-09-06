import Header from '@/layout/Header'
import SideBar from '@/layout/SideBar'
import React, { useState } from 'react'
import '../styles/globals.css'
import Button from '@/components/Button/Button'

const work = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='workPage'>
            <Header isActive={isOpen} setIsActive={setIsOpen} />
            <SideBar isActive={isOpen} setIsActive={setIsOpen} />

            <div className="workPageFlexWrap mt30">
                <div className="workPagecard">
                    <img src="/assets/img/bullet.png" alt="" />
                    <div className="cardWorkContent">
                        <h3>Mr Bullet <img src="/assets/svg/arrow.svg" alt="" /></h3>
                        <Button name={'View'} className={'goldenButtonSm'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default work