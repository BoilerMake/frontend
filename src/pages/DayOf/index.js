import React from 'react';
import Schedule from '../../components/Schedule';
import FAQ from '../Info/FAQ';
import Announcements from './Announcements';

const DayOf = () =>
    <div className="landing-page">
        <div className="announcements">
            <h1 className="center title">Quick Links</h1>
            <div className="row">
                <ul>
                    <li>Need technical help with your project? <a href="https://help.boilermake.org/">help.boilermake.org</a></li>
                    <li>Want to socialize or ask questions, etc?<a href="http://invite.boilermake.org">hop on slack!</a></li>
                    <li>Want to see prizes?<a href="https://boilermake-v.devpost.com/">hop on slack!</a></li>
                </ul>
            </div>
        </div>
        <Announcements/>
        <Schedule/>
        <FAQ/>
    </div>

export default DayOf
