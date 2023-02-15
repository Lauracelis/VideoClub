import React from 'react'
import ListaUsuarios from './components/ListaUsuario'
import AgregarUsuario from './components/AgregarUsuario'
import EditarUsuario from './components/EditarUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <h1>
        videoclub
    </h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ListaUsuarios />} exact></Route>
      <Route path='/agregarusuario' element={<AgregarUsuario />} exact></Route>
      <Route path='/editarusuario' element={<EditarUsuario  />} exact></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
