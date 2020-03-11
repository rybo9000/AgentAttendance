import React from 'react';

import '../config/style.css';
import './MCStats.css';

class MCStats extends React.Component {
    
    constructor(props) {
        super(props)

        const stats = {
            mcName: 'KW Southwest',
            classes: 47,
            checkIns: 3387,
            agents: 985
        }

        this.state = {
            mcName: stats.mcName,
            classes: stats.classes,
            checkIns: stats.checkIns,
            agents: stats.agents
        }
    }
    
    render() {

        return (
            <section className='half'>
                <div className='halfTop redBackground onePointFiveRem'>
                    {this.state.mcName}
                </div>
                <div className='mcStatContainer'>
                    <div className='mcStat'>
                        <div className='mcStatTop'>
                            {this.state.classes}
                        </div>
                        <div className='mcStatBottom'>
                            CLASSES
                        </div>
                    </div>
                    <div className='mcStat'>
                        <div className='mcStatTop'>
                            {this.state.checkIns}
                        </div>
                        <div className='mcStatBottom'>
                            CHECK-INS
                        </div>
                    </div>
                    <div className='mcStat'>
                        <div className='mcStatTop'>
                            {this.state.agents}
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
}

export default MCStats;