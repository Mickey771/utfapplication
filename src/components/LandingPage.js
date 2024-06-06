import React, { useState } from 'react'
import SectionOne from './Landing/SectionOne'
import SectionTwo from './Landing/SectionTwo'
import SectionThree from './Landing/SectionThree'
import SectionFour from './Landing/SectionFour'
import SectionFive from './Landing/SectionFive'
import Navbar from './Landing/Navbar'
import SectionSix from './Landing/SectionSix'
import SectionSeven from './Landing/SectionSeven'
import SectionEight from './Landing/SectionEight'
import Footer from './Landing/Footer'
import SharedLayout from './SharedLayout'
import { useSelector } from 'react-redux'



const LandingPage = () => {
    const pairs = useSelector(state => state.configuration.pairs);

    console.log('pairs', pairs);

    return (
        <SharedLayout>
            <main className='landing'>
                {/* <Navbar /> */}
                <SectionOne pairs={pairs} />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <SectionEight />
                {/* <Footer /> */}
            </main>
        </SharedLayout>
    )
}

export default LandingPage