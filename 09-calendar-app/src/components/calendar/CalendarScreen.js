import React, { useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector} from 'react-redux';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import  'moment/locale/es';
import { eventSetActive, eventClearActive } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es') //cambio el idioma de moment a español

const localizer = momentLocalizer(moment) // or globalizeLocalizer


export const CalendarScreen = () => {

    const {events, activeEvent} = useSelector(state => state.calendar)

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() )
    }

    const onSelectEvent = (e) => {

        dispatch( eventSetActive(e) );
        // dispatch( uiOpenModal() );
    }

    const onViewChange = (vista) => {
        setLastView(vista) //modificamos el valor de la vista
        localStorage.setItem('lastView', vista)
    }

    //cuando se hace clic en otro lado, se limpia el evento activo, por ende se oculta el botón de borrado para el evento
    const onSelectSlot = (e) => {
        dispatch( eventClearActive() )
    }
    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacy: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    return (
        <div className="calendar-screen">
            <Navbar/>  
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent= {onDoubleClick}
                onSelectEvent= {onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={ true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal/>
            
            {/* Si hay evento activo muestro el botón de eliminacion   */}

            { activeEvent && <DeleteEventFab/>}
            
            <AddNewFab/>

        </div>
    )
}
