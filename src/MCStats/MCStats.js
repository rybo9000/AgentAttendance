import React from 'react';

import '../Main/Main.css';
import './MCStats.css';

function MCStats(props) {
    return (
        <section className='half'>
            <div className='halfTop redBackground onePointFiveRem'>
                {props.mcName}
            </div>
            <div className='mcStatContainer'>
                <div className='mcStat'>
                    <div className='mcStatTop'>
                        {props.classes}
                    </div>
                    <div className='mcStatBottom'>
                        CLASSES
                    </div>
                </div>
                <div className='mcStat'>
                    <div className='mcStatTop'>
                        {props.checkIns}
                    </div>
                    <div className='mcStatBottom'>
                        CHECK-INS
                    </div>
                </div>
                <div className='mcStat'>
                    <div className='mcStatTop'>
                        {props.agents}
                    </div>
                    <div className='mcStatBottom'>
                        AGENTS
                    </div>
                </div>
            </div>
            <div className='halfBottom redBackground'></div>
        </section>
    )
}

export default MCStats;