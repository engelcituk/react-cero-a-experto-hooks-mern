import React from 'react'
import { uiOpenModal } from '../../actions/ui';
import { useDispatch } from 'react-redux';


export const AddNewFab = () => {
    
    const dispatch = useDispatch();

    const handleClickNew = (e) => {

        dispatch( uiOpenModal() )

    }
    return (
        <button 
            onClick={ handleClickNew }
            className="btn btn-primary fab"
        >
        <i className="fas fa-plus"></i>
            
        </button>
    )
}
