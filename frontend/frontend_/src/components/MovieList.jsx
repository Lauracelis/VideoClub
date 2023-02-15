import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleMovie from './SingleMovie'

export const MovieList = () => {

    const [datausuarios, setdatausuarios] = useState([])
    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuarios(res.data)
        }).catch(err => {
            console.log(err)
    })
}, [])
 //Mapear lista de usuario en objeto de usuario
 const listadeusuarios= datausuarios.map(usuario=> {
    return(
        <div>
            <SingleMovie usuario={usuario}/>
        </div>
    )
 })
return (
    <div>
        <h1>movieList</h1>
        <SingleMovie />
    </div>
)
}
export default MovieList