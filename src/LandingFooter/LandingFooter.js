import React from 'react';

import '../Landing/Landing.css';
import './LandingFooter.css';

function LandingFooter() {
    return (
        <footer className='full darkBackground'>
            <div className='container'>
                <div className='footerDiv footerDivPadding'>
                    <span className='footerTopHeader'>FEATURES</span>
                    <ul>
                        <li>Track Attendance For Classes</li>
                        <li>Track Attendance For Meetings</li>
                        <li>Reporting Tools</li>
                        <li>Retention Tools</li>
                        <li>Monetize With Ads</li>
                        
                    </ul>
                </div>
                <div className='footerDiv footerDivPadding'>
                    <span className='footerTopHeader'>BENEFITS</span>
                    <ul>
                        <li>Save Time In Classes</li>
                        <li>Save Time In Meetings</li>
                        <li>Eliminate Paper Waste</li>
                        <li>Automatic Follow Up Emails</li>
                        
                    </ul>
                </div>
                <div className='footerDiv footerDivPadding'>
                    <span className='footerTopHeader '>CONTACT</span>
                    <ul>
                        <li>Agent Attendance</li>
                        <li>info@agentattendance.com</li>
                    </ul>
                </div>
                <div className='footerDiv' id='footerDivAbout'>
                    <span className='footerTopHeader '>ABOUT AGENT ATTENDANCE</span>
                    <p>
                        My name is Ryan Fielder. I am the creator of Agent Attendance. I am also the previous Technical Director for Keller Williams Market Center #1 in Austin, Texas.
                    </p>
                    <p>
                        Market Center #1 currently has over 1000 Agents and the growth is showing no signs of slowing down!
                    </p>
                    <p>
                        At that agent count, we were having problems finding a good solution to track attendance in our classes and meetings. The cheap options didn't do a good job and even the expensive ones still weren't a perfect fit! 
                    </p>
                    <p>
                        To solve this problem I created Agent Attendance.
                    </p>
                    <hr />
                    <span class='footerContact'>CONTACT ME WITH QUESTIONS</span>


                </div>
            </div>

        </footer>
    )
}

export default LandingFooter;