import Home from './components/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return <div className=' bg-[#1F1E24] w-screen h-screen flex'>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
    </Routes>
  </div>
}

export default App
