import React from 'react'

const Cancion = ({letra}) => {
    if(letra.length === 0) return null
    return (
        <React.Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">
                {letra}
            </p>
        </React.Fragment>
    )
}

export default Cancion
