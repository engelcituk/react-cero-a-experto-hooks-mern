import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 

import { LoginScreen } from '../../../components/auth/LoginScreen';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{},
    ui:{
        loading: false,
        msgError: null
    }
}

let  store = mockStore( initState );

const wrapper = mount(
    <Provider store= {store} >
        <MemoryRouter>
            <LoginScreen/>
        </MemoryRouter>
    </Provider>

)

describe('Pruebas en el LoginScreen', () => {

    beforeEach( ()=> {
        store = mockStore( initState );
    })

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})
