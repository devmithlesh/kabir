import Header from '@/layout/Header'
import SideBar from '@/layout/SideBar'
import React, { useState } from 'react'
import '../styles/globals.css'
import Button from '@/components/Button/Button'
import Link from 'next/link'

const service = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='mt30 mb40 servicesWrapper'>
            <Header isActive={isOpen} setIsActive={setIsOpen} />
            <SideBar isActive={isOpen} setIsActive={setIsOpen} />
            <div className='container mt60'>
                <h3 className='text40 text40service mb40'><img src="/assets/img/service.png" alt="" /> Services</h3>

                <div className="serviceCardFlexWrap">
                    {
                        [...Array(5).keys()].map(() => {
                            return (
                                <div className="serviceCardWrap">
                                    <img src="/assets/img/digital.png" alt="" />
                                    <div className="serviceCardRightSide">
                                        <h3><Link href={''}>Brand Identity Design</Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <path d="M1 1H10V10" stroke="#27282B" stroke-width="1.5" />
                                                <path d="M10 1L1 10" stroke="#27282B" stroke-width="1.5" />
                                            </svg>
                                        </h3>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                                    <circle cx="11" cy="11.5" r="10" stroke="#D3A47E" stroke-width="1.5" />
                                                    <path d="M10.5652 5.41304V11.5L15.3478 14.5435" stroke="#D3A47E" stroke-width="1.5" />
                                                </svg>

                                                <p><span>Delivery time: </span> Within 1 weeks</p>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                    <path d="M15.6 3.2001C17.789 4.88189 19.2 7.52617 19.2 10.5C19.2 15.581 15.081 19.7 9.99999 19.7C9.0635 19.7 8.1597 19.5601 7.30835 19.3" stroke="#D3A47E" stroke-width="1.5" />
                                                    <path d="M15.2 7.70001L15.2 2.90001L20 2.90001" stroke="#D3A47E" stroke-width="1.5" />
                                                    <path d="M12.4 1.6162C11.6349 1.41 10.8303 1.30002 10 1.30002C4.91903 1.30002 0.800049 5.419 0.800049 10.5C0.800049 13.2885 2.44066 16.0129 4.40005 17.7" stroke="#D3A47E" stroke-width="1.5" />
                                                    <path d="M4.80005 13.3L4.80005 18.1L4.85468e-05 18.1" stroke="#D3A47E" stroke-width="1.5" />
                                                </svg>
                                                <p> <span>Concepts & revisions: </span>2 concepts, 2 revisions</p>
                                            </li>
                                        </ul>
                                        <Button name={'Inquire'} className={'goldenButtonSm'} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default service