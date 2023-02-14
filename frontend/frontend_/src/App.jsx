import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieList from './components/MovieList'
import CreateMovie from './components/CreateMovie'
import EditMovie from './components/EditMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>VIDEOCLUB</h1>
      <MovieList />
      <CreateMovie />
      <EditMovie />

    </div>
  )
}

export default App
