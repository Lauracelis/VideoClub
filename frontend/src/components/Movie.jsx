import React from "react";
import { Link } from "react-router-dom";
export default function Movie({ movie }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{movie.idmovie}</li>
            <li className="list-group-item">{movie.idname}</li>
            <li className="list-group-item">{movie.idtitle}</li>
            <li className="list-group-item">{movie.idyear}</li>
            <li className="list-group-item">{movie.idtime}</li>
            <li className="list-group-item">{movie.idlang}</li>
            <li className="list-group-item">{movie.iddate}</li>
            <li className="list-group-item">{movie.idcountry}</li>

            <Link to={`/editmovie/${movie.idmovie}`}>
              <li className="btn btn succes">editar</li>
            </Link>
            &nbsp
            <button className="btn btn-danger">eliminar</button>
            <hr className="mt-4"></hr>
          </ul>
        </div>
      </div>
    </div>
  );
}
