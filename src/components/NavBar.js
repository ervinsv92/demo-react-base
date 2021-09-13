import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = ({usuario = 'Ervin'}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{usuario}</span>
            <Link to={`/principal/menu`}>
                Principal
            </Link>
            <Link to={`/secundaria`}>
                Secundaria
            </Link>
            <Link to={`/paises`}>
                Paises
            </Link>
        </nav>
    )
}
