import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    //const heroes = getHeroesByPublisher(publisher);

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]); //si el publisher cambia disparo la función

    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
