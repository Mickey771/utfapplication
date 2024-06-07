import React, { useState } from 'react'
import SectionOne from './Landing/SectionOne'
import SectionTwo from './Landing/SectionTwo'
import SectionThree from './Landing/SectionThree'
import SectionFour from './Landing/SectionFour'
import SectionFive from './Landing/SectionFive'
import SectionSix from './Landing/SectionSix'
import SectionSeven from './Landing/SectionSeven'
import SectionEight from './Landing/SectionEight'
import SharedLayout from './SharedLayout'
import { useSelector } from 'react-redux'



const LandingPage = () => {
    const pairs = useSelector(state => state.configuration.pairs);

    return (
        <SharedLayout>
            <main className='landing'>
                <SectionOne pairs={pairs} />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
                <SectionEight />
            </main>
        </SharedLayout>
    )
}

export default LandingPage