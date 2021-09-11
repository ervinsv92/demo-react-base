import React from 'react'

export const NavBar = ({usuario}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">{usuario}</span>
        </nav>
    )
}
