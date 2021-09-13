import React from 'react'
import { NavBar } from '../components/NavBar'
import { Pais } from '../components/Pais'
import { Paises } from '../components/Paises'

export const PaisesPage = () => {
    return (
        <div>
            <NavBar />
            <div className="form-group row">
                <div className="col-lg-6">
                    <h2>Paises</h2>
                    <Paises />
                </div>
                <div className="col-lg-6">
                    <Pais />
                </div>
            </div>
        </div>
    )
}
