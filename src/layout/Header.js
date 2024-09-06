import React from 'react'
import './layout.css'
import { ThreeDots, WinIcon } from '@/pages/icons'

const Header = ({ setIsActive, isActive }) => {
    return (
        <section>
            <div className='container mt60'>
                <div className='headerWrapper'>
                    <button><WinIcon className={'pointer'} /></button>
                    <button onClick={() => setIsActive(true)}><ThreeDots className="pointer" /></button>
                </div>
            </div>
        </section>
    )
}

export default Header