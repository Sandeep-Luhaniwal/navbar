import React, { useState } from 'react';
import imgcross from "../assets/images/svg/cross-23.svg"
import menuIcon from "../assets/images/svg/menuIcon.svg"


const Nav = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='d-flex animati'>
                <div className={`${show ? "navBar" : "margin-left"}`}>
                    <div className='relaive'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Content</li>
                            <li>Serives</li>
                        </ul>
                        <button className='crossIcon chang'
                            onClick={() => setShow(false)}>
                            <img src={imgcross} alt="cross" />
                        </button>
                    </div>
                </div >
                <button className='menuIcon'
                    onClick={() => setShow(true)}>
                    <img src={menuIcon} alt="menu" />
                </button>
            </div>
        </>
    )
}

export default Nav
