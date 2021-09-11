import React,{useState} from 'react';

export const LoginPage = ({history}) => {

    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");

    const handleUsuarioInputChange = (e)=> {
        setUsuario(e.target.value)
    };
    const handleClaveInputChange = (e)=> {
        setClave(e.target.value)
    };
    const handleClick = ()=>{
        history.push(`/principal/${usuario}`);
        console.log(usuario, clave)
    }

    return (
        <div className="mt-2">
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <input type="text" className="form-control" placeholder="Usuario"
                        value={usuario}
                        onChange={handleUsuarioInputChange}
                    />
                </div>
            </div>
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <input type="password" className="form-control" placeholder="Clave"
                        value={clave}
                        onChange={handleClaveInputChange}
                    />
                </div>
            </div>
            <div className="form-group row centrar-contenido">
                <div className="col-lg-2">
                    <button className="btn btn-primary btn-block" 
                        onClick={handleClick}
                    >Ingresar</button>
                </div>
            </div>
        </div>
    )
}
