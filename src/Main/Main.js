import React from 'react';

import Header from '../Header/Header';
import TakeAttendance from '../TakeAttendance/TakeAttendance';
import MCStats from '../MCStats/MCStats';
import Footer from '../Footer/Footer';

import './Main.css';

const classes = [
    'Orientation',
    'Realty 101',
    'Buying & Selling',
    'Close The Deal',
    'Financing 101'
];

const stats = {
    mcName: 'KW Southwest',
    classes: 47,
    checkIns: 3387,
    agents: 985
}

class Main extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            classes: classes,
            stats: stats
        }
    }
    
    render() {
        return (
            <>
                <Header />
                <main className='full siteContent'>
                    <div className='container'>
                        <TakeAttendance classes={this.state.classes}/>
                        <MCStats mcName={this.state.stats.mcName} classes={this.state.stats.classes} checkIns={this.state.stats.checkIns} agents={this.state.stats.agents}/>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default Main;