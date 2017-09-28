import React from 'react';

const friday = [{
    start: '6:00 PM',
    name: 'Check in begins',
    info: 'Loeb Playhouse'
},{
    start: '8:00 PM',
    name: 'Opening Ceremonies',
    info: 'Loeb Playhouse'
},{
    start: '9:00 PM',
    name: 'Team assembly',
    info: 'CoRec Black & Gold Gyms'
},{
    start: '9:30 PM',
    name: 'Dinner from Moe\'s',
    info: 'taco bar (yes there\'s  queso)'
},{
    start: '10:00 PM',
    name: 'Hacking Begins'
},{
    start: '10:00 PM',
    name: 'Workshop/talk 1'
},{
    start: '11:59 PM',
    name: 'Showers close'
}];

let saturday = [{
    start: '3:00 AM',
    name: 'Late Night Snack'
},{
    start: '8:00 AM',
    name: 'Breakfast',
    info: 'eggs, potatoes, bacon, fruit, bagels'
},{
    start: '8:00 AM',
    name: 'Showers reopen'
},{
    start: '9:00 AM',
    name: 'Workshop/talk 2'
},{
    start: '10:00 AM',
    name: 'Workshop/talk 3'
},{
    start: '11:30 AM',
    name: 'Yoga'
},{
    start: '12:30 PM',
    name: 'Lunch - Pasta Bar',
    info: 'chicken, marinara, alfredo, veggies, salad, rolls'
},{
    start: '1:00 PM',
    name: 'Workshop/talk 4'
},{
    start: '1:00 PM',
    name: 'Snack'
},{
    start: '1:30 PM',
    name: 'Yoga'
},{
    start: '3:00 PM',
    name: 'Workshop/talk 5'
},{
    start: '4:30 PM',
    name: 'MLH Cup Stacking'
},{
    start: '6:00 PM',
    name: 'Dinner from Hotbox - pizza, breadsticks, salad'
},{
    start: '6:00 PM',
    name: 'Workshop/talk 6'
},{
    start: '11:59 PM',
    name: 'Showers close'
}];

let sunday = [{
    start: '1:00 AM',
    name: 'Late Night Snack'
},{
    start: '8:00 AM',
    name: 'Breakfast',
    info: 'egg casseroles, potatoes, fruit, yogurt, bagels, pastries'
},{
    start: '9:30 AM',
    name: 'Hacking Ends'
},{
    start: '10:00 AM',
    name: 'Expo Begins'
},{
    start: '10:00 AM',
    name: 'Showers reopen'
},{
    start: '11:30 AM',
    name: 'Lunch from Potbelly',
    info: 'sandwiches'
},{
    start: '1:00 PM',
    name: 'Closing Ceremonies',
    info: 'Loeb Playhouse'
},{
    start: '2:30 PM',
    name: 'Busses Depart',
    info: 'Loeb Playhouse'
}];

const ScheduleDay =  ({dayData, title}) =>
    <div className="col-4 paddingx">
      <h3 className="center">{title}</h3>
        { dayData.map(item =>
          <div className="schedule-item" key={item.name+item.start}>
            <div className="time">{item.start}</div>
            <div className="event">{item.name} <br/><i>{item.info}</i></div>
          </div>
        )}
    </div>;

const Schedule = () => (
  <div className="schedule">
    <h1 className="center title">Schedule</h1>
    <div className="row">
      <ScheduleDay dayData={friday} title="Friday (9/29)"/>
      <ScheduleDay dayData={saturday} title="Saturday (9/30)"/>
      <ScheduleDay dayData={sunday} title="Sunday (10/1)"/>
    </div>
  </div>
);

export default Schedule;
