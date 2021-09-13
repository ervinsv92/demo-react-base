import React from 'react'
import { Contador } from '../components/Contador'
import { NavBar } from '../components/NavBar'

export const SecondPage = () => {
    return (
        <div>
            <NavBar />
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <Contador />
                </div>
            </div>
        </div>
    )
}
