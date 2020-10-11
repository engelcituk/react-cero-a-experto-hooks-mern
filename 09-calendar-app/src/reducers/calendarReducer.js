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
        case types.eventDeleted: // con filter busco el evento que quiero borrar, ya que con este evito regresar el evento que se está borrando 
            return {  
                ...state,
                /*en el state hay una nota activa, por lo tanto al ser la activa, significa que esta es la que se está borrando
                al dar en la acción de borrar, filter regresar la lista de objetos exceptuando el que cumple con la condición
                */
                events: state.events.filter(
                    /*
                        si el id del evento que se está evaluando es diferente de del id del evento activo, se van a regresar
                    */
                    e => ( e.id !== state.activeEvent.id )
                ),
                activeEvent: null //al quitar el evento activo, reseteo el evento activo
            }
        default:
            return state;
    }
}