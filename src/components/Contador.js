import React from 'react';
import { BotonMas } from './BotonMas';
import { BotonMenos } from './BotonMenos';
import { useSelector, useDispatch } from 'react-redux';
import { contadorSumar } from '../actions/contadorAction';

export const Contador = () => {
    const {contador} = useSelector(state => state.contador);
    const dispatch = useDispatch();
    const handleClickMas = ()=>{
        dispatch(contadorSumar());
    }

    return (
        <div>
            <div className="form-group row centrar-contenido">
                <BotonMas eventoBotonMas={handleClickMas} />
            </div>
            <div className="form-group row centrar-contenido">
                <input className="form-control" type="text" readOnly={true} value={contador}
                />
            </div>
            <div className="form-group row centrar-contenido">
                <BotonMenos />
            </div>
        </div>
    )
}
