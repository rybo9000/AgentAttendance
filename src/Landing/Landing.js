import React from 'react';

import LandingHeader from '../LandingHeader/LandingHeader';
import LandingHero from '../LandingHero/LandingHero';
import LandingLove from '../LandingLove/LandingLove';
import LandingFeatures from '../LandingFeatures/LandingFeatures';
import LandingStats from '../LandingStats/LandingStats';
import LandingTryFree from '../LandingTryFree/LandingTryFree';
import LandingFooter from '../LandingFooter/LandingFooter';

import './Landing.css';

class Landing extends React.Component {
    render() {
        return (
            <>
                <div className='container'>
                    <LandingHeader />
                </div>
                <LandingHero />
                <LandingLove />
                <LandingFeatures />
                <LandingStats />
                <LandingTryFree />
                <LandingFooter />

            </>
        )
    }
}

export default Landing;