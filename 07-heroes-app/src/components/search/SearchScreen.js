import React , { useMemo } from 'react';
import queryString from 'query-string'; //paquete de npm
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation} from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location  = useLocation();

    const { q = '' } = queryString.parse(location.search); //obtengo el query -> q
    
    const [values, handleInputChange]= useForm({
        searchText: q //valor inicial
    });

    const {searchText} = values;
    //memorizo los valores en el query string
    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]); //si el query cambia disparo getHeroesByName
    
    //const heroesFiltrados =  getHeroesByName(searchText);

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
                    { (q === '') &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    { (q !== '' && heroesFiltrados.length === 0) &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }
                    
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
