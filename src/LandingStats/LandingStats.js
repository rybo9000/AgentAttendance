import React from 'react';

import totalMC from '../img/totalMC.jpg';
import totalClasses from '../img/totalClasses.jpg';
import totalAgents from '../img/totalAgents.jpg';
import totalCheckIn from '../img/totalCheckIn.jpg';

import '../Landing/Landing.css';
import './LandingStats.css';

class LandingStats extends React.Component {
    render() {
        return (
            <div className='landingFull landingRedBackground'>
                <div className='landingContainer landingStatsContainer'>
                    <div className='statContainer'>
                        <img src={totalMC} alt='Total Market Centers' />
                        <span className='statBig'>17</span>
                        <span className='statText'>MARKET CENTERS</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalClasses} alt='Total Classes Created' />
                        <span className='statBig'>2485</span>
                        <span className='statText'>CLASSES</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalAgents} alt='Total Agents' />
                        <span className='statBig'>15335</span>
                        <span className='statText'>AGENTS</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalCheckIn} alt='Total Class Check-Ins' />
                        <span className='statBig'>56224</span>
                        <span className='statText'>CHECK-INS</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingStats;