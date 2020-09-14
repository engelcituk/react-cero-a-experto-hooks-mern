import React, { useRef, useEffect } from 'react';
import { NotesAppBar } from './NotesAppBar';
import {useSelector, useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForms';
import { activeNote, startDeleting } from '../../actions/notes';


export const NoteScreen = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title, id} = formValues;

    const activeId = useRef(note.id)

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
        }
    }, [note, reset])

    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues}) );
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(id) )
    }

    return (
        <div className="notes__main-content">
           
            <NotesAppBar/>
            
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                    name="body"


                >
                </textarea>

                {
                    (note.url) &&
                    (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }
            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
            Delete
            </button>
        </div>
    )
}
