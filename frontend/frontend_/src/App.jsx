import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieList from './components/MovieList'
import CreateMovie from './components/CreateMovie'
import EditMovie from './components/EditMovie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">VIDEOCLUB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="createMovie">Agregar Pelicula</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieList />} exact></Route>
          <Route path='/createMovie' element={<CreateMovie />} exact></Route>
          <Route path='/editMovie' element={<EditMovie />} exact></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
