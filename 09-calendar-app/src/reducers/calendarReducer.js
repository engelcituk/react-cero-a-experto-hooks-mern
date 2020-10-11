import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events: [
        {
            id: new Date().getTime(),
            title: 'Cumpleaños de Lu',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgColor: '#fafafa',
            user: {
                _id: '124',
                name:' Cituk'
            }
        }
    ],
    activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:
            return {  
                ...state,
                events: [
                    ...state.events,
                    action.payload 
                ]
            }
        case types.eventClearActive:
            return {  
                ...state,
                activeEvent: null
            }
        case types.eventUpdated: // con map busco el evento que quiero actualizar
            return {  
                ...state,
                events: state.events.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }
        default:
            return state;
    }
}