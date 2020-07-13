import React from 'react';
import { shallow } from 'enzyme';
import  GifExpertApp  from '../GifExpertApp';


describe('Pruebas en GifExpertApp', ()=> {
 
    test('debe de mostrar  <GifExpertApp/> correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
     });

     test('debe de mostrar una lista de categorias ', () => {
        const categories = ['One Piece', 'One Punch'] ;

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper.find('GifGrid').length).toBe(categories.length);

     });
     

})