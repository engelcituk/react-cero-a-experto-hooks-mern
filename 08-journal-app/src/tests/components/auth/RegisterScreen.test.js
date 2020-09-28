
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 

import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';
import { types } from '../../../types/types';

/*jest.mock('../../../actions/auth', ()=> ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))*/

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
//store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store= {store} >
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>

)

describe('Pruebas en el registerScreen', () => {

    test('Debe de mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();        
    })

    test('Debe de hacer el dispatch de la acción respectiva', () => {

        const emailField = wrapper.find('input[name="email"]');
        //console.log(emailField.exists());
        emailField.simulate('change',{
            target: {
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload : 'email no es valido'
        });        
        
    })
    
})
