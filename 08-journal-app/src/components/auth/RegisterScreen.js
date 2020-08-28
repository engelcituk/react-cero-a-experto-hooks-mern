import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

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
        console.log(name,email, password, password2);
    }

    const isFormValid = () => {
        
    }

    return (
        <>
            <h3 className="auth__title"> Register</h3>

            <form onSubmit={handleRegister}>
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
