import React from 'react'
import './layout.css'
const Header = ({ setIsActive, isActive }) => {
    return (
        <section>
            <div className='container mt60'>
                <div className='headerWrapper'>
                    <button className='pointer'><img src="/assets/svg/winIcon.svg" alt="" /></button>
                    <button className={`crossIconSidebar`} onClick={() => setIsActive(!isActive)}> <img src={`/assets/svg/${!isActive ? 'threedotsIcon' : 'crossIcon'}.svg`} alt="" /> </button>
                </div>
            </div>
        </section>
    )
}

export default Header