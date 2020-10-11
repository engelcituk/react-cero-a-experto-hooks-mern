import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './components/router/AppRouter';

export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}

/* en este nivel de aplicacion proveemos aqui en store creado */