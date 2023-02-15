import  {React, useState} from "react";

import axios from 'axios'

export default function AddMovie() {




  function addMovie(){
    let movie = {
      title: title,
      year:year,
      date:date,
      languaje:languaje,
      time:time,
      country:country, 

    }
    console.log(movie)

    axios.post('/api/_movie/addmovie', movie)
    .then(res =>{
      alert(res.data)
    })
    .then(err => {console.log(err)})

  }


  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Agregar nueva pelicula</h2>
      </div>
 
      <div className="row"> 
        <div className="col-sm-6 offset-3"> 
          
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titulo
            </label>
            <input type="text" className="from-control" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Año
            </label>
            <input type="text" className="from-control" value={year} onChange={(e) => {setYear(e.target.value)}}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              fecha
            </label>
            <input type="text" className="from-control" value={date} onChange={(e) => {setDate(e.target.value)}}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="languaje" className="form-label">
              Lenguaje
            </label>
            <input type="text" className="from-control" value={languaje} onChange={(e) => {setLanguaje(e.target.value)}}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              tiempo
            </label>
            <input type="text" className="from-control" value={time} onChange={(e) => {setTime(e.target.value)}}></input>
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label" >
              País
            </label>
            <input type="text" className="from-control" value={country} onChange={(e) => {setCountry(e.target.value)}}></input>
          </div>

          <button onClick={addMovie} className="btn btn-succes">Guardar pelicula</button>
        </div>
      </div>
    </div>
  );
}
