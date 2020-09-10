import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForms';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange ] = useForm({
        name:'Luci',
        email: 'heymundo@gmail.com',
        password:'123456',
        password2:'123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid()){
            console.log('formulario valido');  
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            console.log('nombre es requerido');
            return false;
        } else if(!validator.isEmail(email)){
            console.log('email no es valido');
            return false;
        }else if(password !== password2 || password.length < 5 ){
            console.log('las contraseñas deben de coincidir y que sea de al menos 5 caracteres');
            return false;
        }
        return true;
    }

    return (
        <>
            <h3 className="auth__title"> Register</h3>

            <form onSubmit={handleRegister}>

                <div className="auth___alert-error">
                    Hola mundo
                </div>

                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />



                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    

                >
                    Registrar
                </button>


                
                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>
            </form>
        </>
    )
}
