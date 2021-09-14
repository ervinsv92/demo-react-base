import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPaises, setPais } from '../actions/paisesAction';

export const Paises = () => {
    const {paises} = useSelector(state => state.paises);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPaises());
    }, []);

    const handleClick = (pais)=>{
        dispatch(setPais(pais));
    }
    return (
        <div>
            <ul className="paises">
                {
                    paises.map(pais=>(
                        <li onClick={ () => handleClick(pais)} key={pais.id} className="puntero">
                            {pais.name}
                        </li>
                    )
                    )
                } 
            </ul>
        </div>
    )
}
