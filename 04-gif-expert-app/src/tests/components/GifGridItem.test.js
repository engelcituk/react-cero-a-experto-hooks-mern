import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem/>', ()=> {
    test('debe de mostrar  <GifGridItem/> correctamente ', () => {
        const title='Un título';
        const url='https://';
        const wrapper = shallow(<GifGridItem title={title} url={url}/>);

        expect(wrapper).toMatchSnapshot();
     });
     
})