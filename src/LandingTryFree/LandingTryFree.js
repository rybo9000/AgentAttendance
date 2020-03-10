import React from 'react';

import '../Landing/Landing.css';
import './LandingTryFree.css';

function LandingTryFree() {
    return (
        <section class='container tryFreeContainer'>
            <span class='tryFreeBig'>
                TRY IT FREE FOR 30 DAYS!
            </span>
            <span class='tryFreeSmall'>
                SIGN UP NOW FOR FREE!  NO FINANCIAL OBLIGATION!
            </span>
            <button class='tryFreeButton'>Sign Up!</button>
        </section>
    )
}

export default LandingTryFree;