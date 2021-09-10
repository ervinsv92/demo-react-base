import React from 'react'

export const LoginPage = () => {
    return (
        <div className="centrar-contenido1">
            <div className="row">
                <div className="col-lg-2">
                    <input type="text" className="form-control" placeholder="Usuario"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <input type="password" className="form-control" placeholder="Clave"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-2">
                    <button className="btn btn-primary btn-block">Ingresar</button>
                </div>
            </div>
        </div>
    )
}
