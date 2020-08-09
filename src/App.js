import React, { Fragment,useState,useEffect } from 'react';
import Formulario from './components/Formulario'
import Info from './components/Info'
import Cancion from './components/Cancion'
import Axios from 'axios'

function App() {

  const [busqueda_letra, guardarBusquedaLetra] = useState({})
  const [letra, guardarLetra] = useState('')
  const [informacion, guardarInformacion] = useState('')

  useEffect(()=> {
    if(Object.keys(busqueda_letra).length === 0) return
    const consultarApiLetra = async () => {
      const {artista, cancion} = busqueda_letra
      const url_cancion = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url_artista = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      //Consulta ambas al mismo tiempo ganando performance
      const [letra, informacion] = await Promise.all([
        Axios.get(url_cancion),
        Axios.get(url_artista)
      ])

      guardarLetra(letra.data.lyrics)
      guardarInformacion(informacion.data.artists[0])

    }
    consultarApiLetra()
  },[busqueda_letra, informacion])
  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              informacion={informacion}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
