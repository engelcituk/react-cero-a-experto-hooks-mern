import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3> Login</h3>

            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <button
                    type="submit"

                >
                    Ingresar
                </button>
                <hr/>
                Google
            </form>
        </>
    )
}
