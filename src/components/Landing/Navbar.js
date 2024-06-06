import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../../utils/data'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [active, setActive] = useState(links[0])

    const [isMenu, setIsMenu] = useState(false)
    return (
        <nav className='navbar'>
            <div className="navbar_center">
                <img src="/images/logo.svg" alt="" />
                <div className={`links ${isMenu && 'links_open'}`}>
                    {
                        links.map((item, index) => <Link key={index} className={`links_item ${item === active && 'active'}`} to={item.path}>{item.text}</Link>)
                    }
                </div>
                <div className='right'>
                    <Link className='login' to={'/signin'}>Login</Link>
                    <Link to={'/signup'} className='get-started'>Get Started</Link>
                    <button onClick={() => setIsMenu(!isMenu)} className={`menu  `}><span><AiOutlineMenu /></span></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar