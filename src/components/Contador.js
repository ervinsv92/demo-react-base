import React from 'react'
import { BotonMas } from './BotonMas'
import { BotonMenos } from './BotonMenos'

export const Contador = () => {
    return (
        <div>
            <div className="form-group row centrar-contenido">
                <BotonMas />
            </div>
            <div className="form-group row centrar-contenido">
                <input className="form-control" type="text" readOnly={true}/>
            </div>
            <div className="form-group row centrar-contenido">
                <BotonMenos />
            </div>
        </div>
    )
}
