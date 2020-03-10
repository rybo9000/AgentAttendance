import React from 'react';

import '../Landing/Landing.css';
import './LandingFeatures.css';

class LandingFeatures extends React.Component {
    
    handleButtonClick = () => {
        this.props.history.push('/signup');
    }
    
    render() {
        return (
            <section className='featuresContainer landingContainer' id='features'>
                <div>
                    <span className='featuresPrice'>$39.99</span><span className='perMonth'>per month</span>
                </div>
                <div className='featuresRow'>
                    <div className='featuresULContainer'>
                        <ul>
                            <li>Free 30 Day Trial</li>
                            <li>Attendance Tracking</li>
                            <li>Agent Retention</li>
                            <li>Monetize with Ads</li>
                        </ul>
                    </div>
                    <div className='featuresULContainer'>
                        <ul>
                            <li>No Contract</li>
                            <li>Multiple Report Types</li>
                            <li>Export to Excel</li>
                            <li>Advanced Statistics</li>
                        </ul>
                    </div>
                    <div className='featuresULContainer'>
                        <ul>
                            <li>World Class Support</li>
                            <li>Unlimited Classes</li>
                            <li>Unlimited Users</li>
                            <li>Unlimited Categories</li>
                        </ul>
                    </div>
                </div>
                <button className='featuresButton' onClick={this.handleButtonClick}>START YOUR FREE TRIAL</button>
            </section>
        )
    }
}

export default LandingFeatures;