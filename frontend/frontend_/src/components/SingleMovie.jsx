import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios '

export const SingleMovie = (usuario) => {
    const navegar = useNavigate()
    //funcion para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario',{idusuario: idusuario}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
         }).catch(err => {
            console.log(err)
         })
    }


    return (

        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.idusuario}</li>
                        <li className='list-group-item'>{usuario.num}</li>
                        <li className='list-group-item'>{usuario.titleMovie}</li>
                        <li className='list-group-item'>{usuario.year}</li>
                        <li className='list-group-item'>{usuario.duration}</li>
                        <li className='list-group-item'>{usuario.lenguage}</li>
                        <li className='list-group-item'>{usuario.date}</li>
                        <li className='list-group-item'>{usuario.country}</li>
                        <li className='list-group-item'>{usuario.director}</li>
                        <li className='list-group-item'>{usuario.genres}</li>
                        <li className='list-group-item'>{usuario.actor}</li>
                        <li className='list-group-item'>{usuario.reviewer}</li>
                        <li className='list-group-item'>{usuario.revStars}</li>
                        <li className='list-group-item'>{usuario.numRatings}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar</li></Link>
                    
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
        </div>
    )
}
export default SingleMovie