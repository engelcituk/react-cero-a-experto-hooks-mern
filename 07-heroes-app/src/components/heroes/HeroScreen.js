import React from 'react';
import { useParams, Redirect} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroeById';


export const HeroScreen = ({history}) => {
    
    const {heroeId } = useParams();

    const hero = getHeroById(heroeId);
    // si heroe no existe
    if(!hero){
        return <Redirect to="/" />; //redirijo al home
    }
    
    const handleReturn = () => {
        if(history.length <= 2){ //history guarda el historial de navegacion 
            history.push('/')
        }else{
            history.goBack(); //regreso atrás
        }
    }

    const { superhero, publisher, alter_ego, first_appearance, characters} = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail"
                    alt={superhero}
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Aler ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-warning"
                    onClick={handleReturn}
                    >
                    Return
                </button>
            </div>
        </div>
    )
}
