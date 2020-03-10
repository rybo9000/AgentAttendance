import React from 'react';

import '../Landing/Landing.css';
import './LandingTryFree.css';

class LandingTryFree extends React.Component {
    
    handleButtonClick = () => {
        this.props.history.push('/signup');
    }
    
    render() {
        return (
            <section className='landingContainer tryFreeContainer'>
                <span className='tryFreeBig'>
                    TRY IT FREE FOR 30 DAYS!
                </span>
                <span className='tryFreeSmall'>
                    SIGN UP NOW FOR FREE!  NO FINANCIAL OBLIGATION!
                </span>
                <button className='tryFreeButton' onClick={this.handleButtonClick}>Sign Up!</button>
            </section>
        )
    }
}

export default LandingTryFree;