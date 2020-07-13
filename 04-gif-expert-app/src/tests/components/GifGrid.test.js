import React from 'react';
import { shallow } from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', ()=> {

    test('debe de mostrar  <GifGrid/> correctamente ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const category='One piece';
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
     });

     test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
         const gifs = [
             {
                 id: 'ABC',
                 url:'https://sdgfg.com',
                 title:'cualquier titulo'
             }
         ]
         useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const category='One piece';
        const wrapper = shallow(<GifGrid category={category} />);


        expect(wrapper).toMatchSnapshot();


     })
     
     
})