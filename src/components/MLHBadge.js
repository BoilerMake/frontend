import React from 'react';
import '../assets/misc.scss';
import mlh from '../assets/images/mlh.svg';

const MLHBadge = () => (
    <a id="mlh-trust-badge"
       className="mlh-badge"
       href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white"
       target="_blank"
       rel="noopener noreferrer"
    >
        <img src={mlh}
             alt="Major League Hacking 2017 Hackathon Season"
             style={{width: '100%'}}
        />
    </a>
);

export default MLHBadge;
