import React  from 'react';
import {mount}  from 'enzyme';
import { MemoryRouter , Route} from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';


describe('Pruebas en HeroeScreen', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('Debe de mostrase el componente Redirect sino hay argumentos en la URL ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={historyMock}/>        
            </MemoryRouter> 
        );
        //expect(wrapper).toMatchSnapshot();        
        expect(wrapper.find('Redirect').exists()).toBe(true);        
    });

    test('Debe de  mostar un heroe si el parametro existe y se encuentra', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route path="/hero/:heroeId" component={HeroScreen}/>
            </MemoryRouter> 
        );   
        
        expect(wrapper.find('.row').exists()).toBe(true);        
        
    });
    
    test('Debe de regresar a la pantalla anterior con  PUSH', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route
                    path="/hero/:heroeId"
                    component={ () =>  <HeroScreen history={historyMock} />}
                />
            </MemoryRouter> 
        );   
        
        wrapper.find('button').prop('onClick')();
        
        expect(historyMock.push).toHaveBeenCalledWith('/'); 
        expect(historyMock.goBack).not.toHaveBeenCalled(); 

    });
    
    test('Debe de regresar a la pantalla anterior con GoBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk']}>
                <Route
                    path="/hero/:heroeId"
                    component={ () =>  <HeroScreen history={historyMock} />}
                />
            </MemoryRouter> 
        );   
        
        wrapper.find('button').prop('onClick')();
        
        expect(historyMock.push).toHaveBeenCalledTimes(0); 
        expect(historyMock.goBack).toHaveBeenCalled(); 

    });

    test('Debe de llamar el Redirect si el heroe no existe', () => {  
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-hulk35235']}>
                <Route
                    path="/hero/:heroeId"
                    component={ () =>  <HeroScreen history={historyMock} />}
                />
            </MemoryRouter> 
        );   
            
        expect(wrapper.text()).toBe('');
    });
    
});