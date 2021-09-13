import React from 'react'

export const BotonMas = ({eventoBotonMas}) => {
    const handleClick = ()=>{
        eventoBotonMas();
    }

    return (
        <div>
            <button className="btn btn-primary"
                onClick={handleClick}
            >+</button>
        </div>
    )
}
