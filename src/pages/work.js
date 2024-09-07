import Header from '@/layout/Header'
import SideBar from '@/layout/SideBar'
import React, { useState } from 'react'
import '../styles/globals.css'
import Button from '@/components/Button/Button'
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

const work = () => {
    const [isOpen, setIsOpen] = useState(false)
    //tab
    const [activeTab, setActiveTab] = useState(1);
    const onTabClick = (e, index) => {
        console.log(e);
        setActiveTab(index);
    };

    const tabdata = [
        {
            name: "Graphic Design",
        },
        {
            name: "Branding",
        },
        {
            name: "UI/UX",
        },
        {
            name: "Motion Design",
        },
        {
            name: "Packaging Design",
        },
    ]

    return (
        <div className='workPage mb40'>
            <Header isActive={isOpen} setIsActive={setIsOpen} />
            <SideBar isActive={isOpen} setIsActive={setIsOpen} />

            <div className='container mt60'>
                <Tabs
                    hideNavBtns={true}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                >
                    {tabdata.map((item, index) => (
                        <Tab index={index}>{item.name}</Tab>
                    ))}
                </Tabs>

                <div className="workPageFlexWrap mt30">
                    <div className="workPagecard">
                        <img src="/assets/img/lifeup.png" alt="" />
                        <div className="cardWorkContent">
                            <h3>Mr Bullet <img src="/assets/svg/arrow.svg" alt="" /></h3>
                            <Button name={'View'} className={'goldenButtonSm'} />
                        </div>
                    </div>
                    <div className="workPagecard">
                        <img src="/assets/img/bullet.png" alt="" />
                        <div className="cardWorkContent">
                            <h3>Mr Bullet <img src="/assets/svg/arrow.svg" alt="" /></h3>
                            <Button name={'View'} className={'goldenButtonSm'} />
                        </div>
                    </div>
                    <div className="workPagecard">
                        <img src="/assets/img/lifepath.png" alt="" />
                        <div className="cardWorkContent">
                            <h3>Mr Bullet <img src="/assets/svg/arrow.svg" alt="" /></h3>
                            <Button name={'View'} className={'goldenButtonSm'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default work