
import React from 'react';
import { shallow } from 'enzyme';
import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en AddCategory', ()=> {
    test('debe de mostrarse correctamente <AddCategory/>', async () => {
        const setCategories = () => {};

        const wrapper = shallow(<AddCategory setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();

    });
})