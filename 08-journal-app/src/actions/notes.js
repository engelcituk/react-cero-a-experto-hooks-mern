import { types } from '../types/types';
import { db } from '../firebase/firebase-config';

export const starNewNote = (err) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);
    }
};

       
  