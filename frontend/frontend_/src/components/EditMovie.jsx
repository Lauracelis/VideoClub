import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditMovie = () => {
    const params =useParams()

    //Hooks
    const[nombre,setNombre]=useState('')
    const[email,setEmail]=useState('')
    const[telefono,setTelefono]=useState('')

    //Para volver atrás al index
    const navegar = useNavigate( )

    useEffect(()=>{
         axios.post('/api/usuario/obtenerdatausuario',{idusuario: params.idusuario}).then(res => {
            console.log(res.data[0])
            const datausuario= res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
         })

    },[])
    //funcion que actualiza
    function editMovie(){
        // nuevo objeto 
        const actualizarusuario ={
            nombre: nombre,
            email: email,
            telefono: telefono,
            idusuario: params.idusuario
        }
        //hacer peticion usando axios
        axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res=>{
            console.log(res.data)
            alert(res.data)
            navegar('/')
        })
        .then(err =>{console.log(err)})
    }
    return (
        <div className='container'>
            <div className='row'>
                    <h1>Editar Movie</h1>
            </div>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className='form-control' value={nombre} onChange={(e)=> {setNombre(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="text" className='form-control'value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="telefono" className='form-label'>Telefono</label>
                        <input type="text" className='form-control'value={telefono} onChange={(e)=> {setTelefono(e.target.value)}}></input>
                    </div>
                    <button onClick={editMovie} className="btn btn-success">Editar Registro</button>
                </div>
            </div>

        </div>
    )
}
export default EditMovie