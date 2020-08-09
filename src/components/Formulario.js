import React, {useState} from 'react'

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista:'',
        cancion:''
    })
    const [error, actualizarError] = useState(false)

    //Función para extraer valores a cada input
    const actualisarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // consultar las apis
    const buscarInformacion = e => {
        e.preventDefault()

        if(artista.trim() === '' || cancion.trim === ''){
            actualizarError(true)
            return
        }
        actualizarError(false)

        //Enviar al componente principal
        guardarBusquedaLetra(busqueda)
    }

    const {artista, cancion} = busqueda

    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null   }
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text" 
                                            name="artista"
                                            className="form-control"
                                            placeholder="Nombre Artista"
                                            onChange={actualisarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text" 
                                            name="cancion"
                                            className="form-control"
                                            placeholder="Nombre Canción"
                                            onChange={actualisarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
