import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [languaje, setLanguaje] = useState("");
  const [time, setTime] = useState("");
  const [country, setCountry] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .post("/api/_movie/getdatamovies", {
        idmovie: params.idmovie,
      })
      .then((res) => {
        console.log(res.data[0]);
        const datamovie = res.data[0];
        setTitle(datamovie.title);
        setYear(datamovie.year);
        setDate(datamovie.date);
        setLanguaje(datamovie.languaje);
        setTime(datamovie.time);
        setCountry(datamovie.country);
      });
  }, []);

  function editMovie() {
    const updatemovie = {
      title: title,
      year:year,
      date:date,
      languaje:languaje,
      time:time,
      country:country, 
      idmovie: params.idmovie
    }
  }

  axios.post('/api/_movie/updatemovies', updatemovie)
  .then(res => {
    console.log(res.data)
    alert(res.data)
  })
  .then(err => {console.log(err)})

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">editar pelicula</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Titulo
            </label>
            <input
              type="text"
              className="from-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Año
            </label>
            <input
              type="text"
              className="from-control"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              fecha
            </label>
            <input
              type="text"
              className="from-control"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="languaje" className="form-label">
              Lenguaje
            </label>
            <input
              type="text"
              className="from-control"
              value={languaje}
              onChange={(e) => {
                setLanguaje(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              tiempo
            </label>
            <input
              type="text"
              className="from-control"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              País
            </label>
            <input
              type="text"
              className="from-control"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></input>
          </div>

          <button onClick={editMovie} className="btn btn-succes">
            editar pelicula
          </button>
        </div>
      </div>
    </div>
  );
}
