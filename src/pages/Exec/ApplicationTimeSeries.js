import React from 'react';
import moment from 'moment';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ApplicationTimeSeries = ({data, timekey}) => {
    let byDay = {};
    data.forEach(application=>{
        let day = moment(application[timekey]).format("DD-MM-YYYY");
        byDay[day] = (byDay[day] || 0) + 1;
    });
    let chartData = Object.keys(byDay).map(key=>({name: key, count: byDay[key]}));
    return(<LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{r: 8}}/>
    </LineChart>);
};
export default ApplicationTimeSeries;
