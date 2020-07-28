import React from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation} from 'react-router-dom';

export const SearchScreen = ({history}) => {

    const location  = useLocation();

    const { q = '' } = queryString.parse(location.search); //obtengo el query -> q
    const heroesFiltrados =  heroes;

    const [values, handleInputChange]= useForm({
        searchText: q //valor inicial
    });

    const {searchText} = values;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);

    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                            placeholder="Encuentra a tu heroe"
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mt-1"
                        >
                        Search
                        </button>
                    </form>

                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        heroesFiltrados.map( hero => (
                            <HeroCard 
                                key= {hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
