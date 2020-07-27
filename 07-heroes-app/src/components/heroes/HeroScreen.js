import React from 'react';
import { Switch, Route, useParams, Redirect} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroeById';


export const HeroScreen = () => {
    
    const {heroeId } = useParams();

    const hero = getHeroById(heroeId);
    // si heroe no existe
    if(!hero){
        return <Redirect to="/" />; //redirijo al home
    }
    const { superhero, publisher, alter_ego, first_appearance, characters} = hero;

    return (
        <div>
            <h1>Hero Screen</h1>
        </div>
    )
}
