import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/partials/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TVShows from "./components/TVShows"

function App() {
  

  return <div className=' bg-[#1F1E24] w-screen h-screen flex'>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/trending' element={<Trending/>} ></Route>
      <Route path='/popular' element={<Popular/>} ></Route>
      <Route path='/movies' element={<Movie/>} ></Route>
      <Route path='/TVShows' element={<TVShows/>} ></Route>
    </Routes>
  </div>
}

export default App
