import React from 'react'
import { useDispatch } from 'react-redux'
import { contadorRestar } from '../actions/contadorAction';

export const BotonMenos = () => {
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(contadorRestar());
    }

    return (
        <div>
            <button type="button" className="btn btn-warning" 
                onClick={handleClick}
            >-</button>
        </div>
    )
}
