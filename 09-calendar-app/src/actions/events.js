import { types } from '../types/types';

export const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
})

export const eventSetActive = ( event ) => ({ 
    type: types.eventSetActive,
    payload: event
})

export const eventClearActive = ( ) => ({ 
    type: types.eventClearActive
})
