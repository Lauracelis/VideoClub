import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditMovie = () => {
    const params =useParams()

    //Hooks
    const [num, setNum] = useState('')
    const [titleMovie, setTitleMovie] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [lenguage, setLenguage] = useState('')
    const [date, setDate] = useState('')
    const [country, setCountry] = useState('')
    const [director, setDirector] = useState('')
    const [genres, setGenres] = useState('')
    const [actor, setActor] = useState('')
    const [reviewer, setReviewer] = useState('')
    const [revStars, setRevStars] = useState('')
    const [numRatings, setNumRatings] = useState('')
    //Para volver atrás al index
    const navegar = useNavigate( )

    useEffect(()=>{
         axios.post('/api/usuario/obtenerdatausuario',{idusuario: params.idusuario}).then(res => {
            console.log(res.data[0])
            const datausuario= res.data[0]

            setNum(datausuario.num)
            setTitleMovie(datausuario.titleMovie)
            setYear(datausuario.year)
            setDuration(datausuario.duration)
            setLenguage(datausuario.lenguage)
            setDate(datausuario.date)
            setCountry(datausuario.country)
            setDirector(datausuario.director)
            setGenres(datausuario.genres)
            setActor(datausuario.actor)
            setReviewer(datausuario.reviewer)
            setRevStars(datausuario.revStars)
            setNumRatings(datausuario.setNumRatings)
         })

    },[])
    //funcion que actualiza
    function editMovie(){
        // nuevo objeto 
        const actualizarusuario ={
            num:num,
            titleMovie: titleMovie,
            year: year,
            duration: duration,
            lenguage:lenguage,
            date:date,
            country:country,
            director:director,
            genres:genres,
            actor:actor,
            reviewer:reviewer,
            revStars:revStars,
            numRatings:numRatings,
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
                        <label htmlFor="num" className='form-label'>#</label>
                        <input type="text" className='form-control' value={num} onChange={(e) => { setNum(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="titleMovie" className='form-label'>Título película</label>
                        <input type="text" className='form-control' value={titleMovie} onChange={(e) => { setTitleMovie(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="year" className='form-label'>Año Lanzamiento</label>
                        <input type="text" className='form-control' value={year} onChange={(e) => { setYear(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="duration" className='form-label'>Duración</label>
                        <input type="text" className='form-control' value={duration} onChange={(e) => { setDuration(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="lenguage" className='form-label'>Lenguaje</label>
                        <input type="text" className='form-control' value={lenguage} onChange={(e) => { setLenguage(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="date" className='form-label'>Fecha</label>
                        <input type="text" className='form-control' value={date} onChange={(e) => { setDate(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="country" className='form-label'>País</label>
                        <input type="text" className='form-control' value={country} onChange={(e) => { setCountry(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="director" className='form-label'>Director</label>
                        <input type="text" className='form-control' value={director} onChange={(e) => { setDirector(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="genres" className='form-label'>Genero</label>
                        <input type="text" className='form-control' value={genres} onChange={(e) => { setGenres(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="actor" className='form-label'>Actor</label>
                        <input type="text" className='form-control' value={actor} onChange={(e) => { setActor(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="reviewer" className='form-label'>Reviewer</label>
                        <input type="text" className='form-control' value={reviewer} onChange={(e) => { setReviewer(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="revStars" className='form-label'>Rev Stars</label>
                        <input type="text" className='form-control' value={revStars} onChange={(e) => { setRevStars(e.target.value) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="numRatings" className='form-label'>Num Ratings</label>
                        <input type="text" className='form-control' value={numRatings} onChange={(e) => { setNumRatings(e.target.value) }}></input>
                    </div>
                    <button onClick={editMovie} className="btn btn-success">Editar Registro</button>
                </div>
            </div>

        </div>
    )
}
export default EditMovie