import React from 'react';
import {shallow} from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Pruebas en HooksApp ', () => {
    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow(<HooksApp/>) ;
        expect(wrapper).toMatchSnapshot();
    });
});

