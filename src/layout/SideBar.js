import React from 'react'

const SideBar = ({ isActive, setIsActive }) => {

    const data = [
        {
            list1: 'Home',
            img: 'assets/svg/home.svg'
        },
        {
            list1: 'About',
            img: 'assets/svg/about.svg'
        },
        {
            list1: 'Services',
            img: 'assets/svg/service.svg'
        },
        {
            list1: 'Work',
            img: 'assets/svg/work.svg'
        },
    ]

    return (
        <div className={`sidebarWrapper ${isActive && 'openActive'}`}>
            <ul>
                {
                    data.map((value, index) => {
                        return (
                            <li index={index}> <img src={value.img} alt="" /> <span>{value.list1}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SideBar