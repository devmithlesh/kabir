import React from 'react'
import './layout.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='container'>
            <div className='footerMain'>
                <div className='footerLeft'>
                    <img src="/assets/svg/winIcon.svg" alt="" />
                    <h3 className='text12 mt25'>Kabir &#169; 2024</h3>

                    <div className="socialIconGroup">
                        <Link href={''} > <img src="/assets/svg/linkedin.svg" alt="" /></Link>
                        <Link href={''} > <img src="/assets/svg/insta.svg" alt="" /></Link>
                        <Link href={''} > <img src="/assets/svg/be.svg" alt="" /></Link>
                        <Link href={''} ><img src="/assets/svg/dribble.svg" alt="" /></Link>
                    </div>
                </div>
                <div className='footerRight'>
                    <ul>
                        <li> <Link href="">More</Link> </li>
                        <li> <Link href={''}>Home</Link>  </li>
                        <li> <Link href={''}>About</Link></li>
                        <li> <Link href={''}>Services</Link></li>
                        <li> <Link href={''}>Work</Link></li>
                    </ul>
                    <ul>
                        <li> <Link href={''}>Social</Link></li>
                        <li> <Link href={''}>LinkedIn</Link></li>
                        <li> <Link href={''}>Instagram</Link></li>
                        <li> <Link href={''}>Services</Link></li>
                        <li> <Link href={''}>Work</Link></li>
                    </ul>
                    <ul>
                        <li> <Link href={''}>Contact</Link></li>
                        <li> <Link href={''}>Read.cv</Link></li>
                        <li> <Link href={''}>WhatsApp</Link></li>
                        <li> <Link href={''}>Email</Link></li>
                        <li> <Link href={''}>Buy me a ☕</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer