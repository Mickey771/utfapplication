import React from 'react'
import Navbar from './Landing/Navbar'
import Footer from './Landing/Footer'
import { useEffect } from 'react'

const SharedLayout = ({ children }) => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div style={{ backgroundColor: '#040a1e' }}>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default SharedLayout