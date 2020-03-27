import React from 'react';

import totalMC from '../img/totalMC.jpg';
import totalClasses from '../img/totalClasses.jpg';
import totalAgents from '../img/totalAgents.jpg';
import totalCheckIn from '../img/totalCheckIn.jpg';

import config from '../config/config.js';
import '../Landing/Landing.css';
import './LandingStats.css';

class LandingStats extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            total_mc: 99,
            total_classes: 99,
            total_agents: 99,
            total_checkins: 99
        }
    }
    
    componentDidMount() {

        // MARKET CENTERS
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/stats/marketcenters`)
            .then(response => response.json())
            .then(response => this.setState({
                total_mc: response[0].count
            }))
        
        // CLASSES
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/stats/classes`)
            .then(response => response.json())
            .then(response => this.setState({
                total_classes: response[0].count
            }))

        // AGENTS
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/stats/agents`)
            .then(response => response.json())
            .then(response => this.setState({
                total_agents: response[0].count
            }))

        // CHECK-INS
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/stats/checkins`)
            .then(response => response.json())
            .then(response => this.setState({
                total_checkins: response[0].count
            }))
    }
    
    render() {
        return (
            <div className='landingFull landingRedBackground'>
                <div className='landingContainer landingStatsContainer'>
                    <div className='statContainer'>
                        <img src={totalMC} alt='Total Market Centers' />
                        <span className='statBig'>{this.state.total_mc}</span>
                        <span className='statText'>MARKET CENTERS</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalClasses} alt='Total Classes Created' />
                        <span className='statBig'>{this.state.total_classes}</span>
                        <span className='statText'>CLASSES</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalAgents} alt='Total Agents' />
                        <span className='statBig'>{this.state.total_agents}</span>
                        <span className='statText'>AGENTS</span>
                    </div>
                    <div className='statContainer'>
                        <img src={totalCheckIn} alt='Total Class Check-Ins' />
                        <span className='statBig'>{this.state.total_checkins}</span>
                        <span className='statText'>CHECK-INS</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingStats;