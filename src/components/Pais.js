import React from 'react'
import { useSelector } from 'react-redux';

export const Pais = () => {
    const {pais} = useSelector(state => state.paises)
    const {name, id, capital, region, population, area} = pais;
    return (
        <div>
            {
                (pais) &&
                <div>
                    <h3>Pais: {name}</h3>
                    <p>Capital: {capital}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Area: {area}</p>
                </div>
            }
            
        </div>
    )
}
