import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/partials/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'

function App() {
  

  return <div className=' bg-[#1F1E24] w-screen h-screen flex'>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/trending' element={<Trending/>} ></Route>
      <Route path='/popular' element={<Popular/>} ></Route>
    </Routes>
  </div>
}

export default App
