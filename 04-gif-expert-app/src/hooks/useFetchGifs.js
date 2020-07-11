import { useState } from 'react';

export const useFetchGifs = ()=> {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    return state; // { data:[], loadind: true };
}