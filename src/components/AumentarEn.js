import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setAumentarEn } from '../actions/contadorAction';

export const AumentarEn = () => {
    const dispatch = useDispatch();
    const {aumentarEn} = useSelector(state => state.contador);

    const hanleInputChange = (e)=>{
        if(!isNaN(e.target.value)){
            dispatch(setAumentarEn(parseInt(e.target.value)));
        }
    }

    return (
        <div>
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <label>Aumentar en</label>
                    <input type="number" className="form-control" placeholder="Aumentar en" value={aumentarEn}
                        onChange={hanleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}
