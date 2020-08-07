import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
           
            <NotesAppBar/>
            
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"

                >
                </textarea>

                <div className="notes__image">
                    <img
                        src="https://s2.best-wallpaper.net/wallpaper/2880x1800/1903/Beautiful-sunrise-purple-sky-moon-river-creative-picture_2880x1800.jpg"
                        alt="imagen"
                    />
                </div>
            </div>

        </div>
    )
}
