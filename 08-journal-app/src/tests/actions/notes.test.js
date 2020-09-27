import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 
import { starNewNote, startLoadingNotes, startSaveNote } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth : {
        uid: 'testing',

    }
}

let  store = mockStore( initState )

describe('Pruebas con las acciones de notes', () => {

    beforeEach( ()=> {
        store = mockStore( initState );
    })

    test('Debe de crear una nueva nota starNewNote', async () => {
        await store.dispatch( starNewNote() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
              }
        });

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
              }
        });

        const docId = actions[0].payload.id;

        await db.doc(`/testing/journal/notes/${docId}`).delete();
    })

    test('startLoadingNotes debe cargar las notas', async () => {

        await store.dispatch( startLoadingNotes('testing') );
        
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect( actions[0].payload[0] ).toMatchObject( expected );
    });
    
    test('startSaveNote debe de actualizar la nota', async () => {

        const note = {
            id : '5YnsUGqA8wvPwLM0qTpY',
            title: 'titulo',
            body: 'body',
        };

        await store.dispatch( startSaveNote( note ) );

        const actions = store.getActions();

        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`/testing/journal/notes/${note.id}`).get();//obtenemos la referencia al doc

        expect( docRef.data().title ).toBe( note.title );//para ver que el titulo sea igual
    });

     
});
