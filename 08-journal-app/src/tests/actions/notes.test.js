import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 
import { starNewNote } from '../../actions/notes';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const store = mockStore({
    auth : {
        uid: 'testing',

    }
})

describe('Pruebas con las acciones de notes', () => {

    test('Debe de crear una nueva nota starNewNote', async () => {
        await store.dispatch( starNewNote() );
    })
     
});
