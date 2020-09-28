import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'; 
import { starNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/firebase-config';
import { fileUPload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload', () => ({
    fileUPload: jest.fn( ()=> {
        return 'https://hola-mundo.com/cosa.jpg';
    })
}))

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth : {
        uid: 'testing',

    },
    notes: {
        active: {
            id: '5YnsUGqA8wvPwLM0qTpY',
            title: 'Hola',
            body:'Mundo'
        }
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

    test('startUploading debe de actualizar el url del entry',  async () => {

         const file = new File([], 'foto.jpg');
         await store.dispatch( startUploading(file) );

         const docRef = await db.doc(`/testing/journal/notes/5YnsUGqA8wvPwLM0qTpY`).get();

         expect( docRef.data().url ).toBe('https://hola-mundo.com/cosa.jpg')

     })
     
});
