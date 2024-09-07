import Link from 'next/link'
import React from 'react'

const SideBar = ({ isActive, setIsActive }) => {

    const data = [
        {
            list1: 'Home',
            img: 'assets/svg/home.svg',
            route: "/"
        },
        {
            list1: 'About',
            img: 'assets/svg/about.svg',
            route: "/about",
        },
        {
            list1: 'Services',
            img: 'assets/svg/service.svg',
            route: "/service",
        },
        {
            list1: 'Work',
            img: 'assets/svg/work.svg',
            route: "/work",
        },
    ]

    return (
        <div className={`sidebarWrapper ${isActive && 'openActive'}`}>
            <ul>
                {
                    data.map((value, index) => {
                        return (
                            <li index={index} onClick={() => setIsActive(false)}>
                                <Link href={value.route}>
                                    <img src={value.img} alt="" /> <span>{value.list1}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SideBar

