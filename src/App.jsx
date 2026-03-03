import { Mujeres } from './pages/Mujeres'
import { Hombres } from './pages/Hombres'
import { Home } from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Logo } from './Contenido/Logo'
import './App.css'
import { Cuerpo } from './Contenido/Cuerpo'

function App() {
  

  return (
    <>
  
    <Logo />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hombres" element={<Hombres />} />
        <Route path="/Mujeres" element={<Mujeres />} />
      </Routes>
    </BrowserRouter>
    
    <Cuerpo />

    </>
  )
}

export default App
