import React from 'react';
import { Navbar } from '../ui/Navbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [{
    title: 'Cumpleaños de Lu',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <Navbar/>  
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
}
