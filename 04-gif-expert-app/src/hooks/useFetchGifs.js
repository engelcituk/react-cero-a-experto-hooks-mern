import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/GetGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => { 
        //se ejecuta una sola vez
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    },[category]);

    return state; // { data:[], loading: true };
}