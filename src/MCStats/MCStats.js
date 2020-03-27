import React from 'react';
import JWT from 'jsonwebtoken';

import '../config/style.css';
import config from '../config/config.js';
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
    
    componentDidMount() {
        const token = localStorage.getItem('aatoken')
        const decodedJWT = JWT.verify(token, config.REACT_APP_JWT_SECRET)

        const options = {
            headers: {
                "mcid": decodedJWT.mcid
            }
        }

        // CONVERT ALL OF THESE TO PROMISE.ALL OR SQL JOIN
        
        // GET MCNAME
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/stats/getname`, options)
            .then(response => response.json())
            .then(response => {
                
                this.setState({
                    mcName: response[0].mcname
                })
            })
        
        // GET TOTAL CLASSES FROM DB
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/stats/totalclasses`, options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    classes: response[0].count
                })
            })

        // GET TOTAL CHECKINS FROM DB
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/stats/totalcheckins`, options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    checkIns: response[0].count
                })
        })

        // GET TOTAL AGENTS FROM DB
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/mc/stats/totalagents`, options)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    agents: response[0].count
                })
        })
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