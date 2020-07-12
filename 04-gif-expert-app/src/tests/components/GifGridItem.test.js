import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem/>', ()=> {
   
     test('debe de mostrar  <GifGridItem/> correctamente ', () => {

        const wrapper = shallow(<GifGridItem/>);

        expect(wrapper).toMatchSnapshot();
     });
     
})