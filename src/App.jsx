import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import Sumadora from './pages/Sumadora.jsx'
import Traductor from './pages/Traductor.jsx'
import TablaMultiplicar from './pages/TablaMultiplicar.jsx'
import Experiencia from './pages/Experiencia.jsx'

function App() {
  const [pagina, setPagina] = useState('inicio')

  function cambiarPagina(nombre) {
    setPagina(nombre)
  }

  function mostrarPagina() {
    if (pagina === 'inicio') {
      return <Inicio />
    }
    if (pagina === 'sumadora') {
      return <Sumadora />
    }
    if (pagina === 'traductor') {
      return <Traductor />
    }
    if (pagina === 'tabla') {
      return <TablaMultiplicar />
    }
    if (pagina === 'experiencia') {
      return <Experiencia />
    }
    return <Inicio />
  }

  return (
    <div className="app">
      <nav className="menu">
        <h2>Menu</h2>
        <button onClick={function () { cambiarPagina('inicio') }}>Pagina Inicial</button>
        <button onClick={function () { cambiarPagina('sumadora') }}>Sumadora</button>
        <button onClick={function () { cambiarPagina('traductor') }}>Traductor de Numeros</button>
        <button onClick={function () { cambiarPagina('tabla') }}>Tabla de Multiplicar</button>
        <button onClick={function () { cambiarPagina('experiencia') }}>Experiencia Personal</button>
      </nav>
      <main className="contenido">
        {mostrarPagina()}
      </main>
    </div>
  )
}

export default App
