import React from 'react';
import { useParams } from 'react-router-dom';
import { AumentarEn } from '../components/AumentarEn';
import { Contador } from '../components/Contador';
import { NavBar } from '../components/NavBar';

export const PrincipalPage = () => {
    const {usuario} = useParams();
    return (
        <div>
            <NavBar usuario={usuario}/>
            <AumentarEn />
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <Contador />
                </div>
                <div className="col-lg-2">
                    <Contador />
                </div>
            </div>
        </div>
    )
}
