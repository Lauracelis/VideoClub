import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieList from './components/MovieList'
import CreateMovie from './components/CreateMovie'
import EditMovie from './components/EditMovie'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>VIDEOCLUB</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<MovieList />} exact></Route>
          <Route path='/createMovie' element ={<CreateMovie />} exact></Route>
          <Route path='/editMovie' element ={<EditMovie />} exact></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
