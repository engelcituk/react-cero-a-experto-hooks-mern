import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {
    const heroesFiltrados =  heroes;

    const [values, handleInputChange]= useForm({
        searchText:''
    });

    const {searchText} = values;

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText)
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
