import { useState } from 'react'

function TablaMultiplicar() {
  const [numero, setNumero] = useState('')
  const [filas, setFilas] = useState([])

  function generarTabla() {
    const n = parseInt(numero)
    if (isNaN(n)) {
      alert('Ingresa un numero valido')
      return
    }
    const resultado = []
    for (let i = 1; i <= 13; i++) {
      resultado.push({ multiplicador: i, total: n * i })
    }
    setFilas(resultado)
  }

  function mostrarFilas() {
    const lista = []
    for (let i = 0; i < filas.length; i++) {
      lista.push(<p key={i}>{numero} x {filas[i].multiplicador} = {filas[i].total}</p>)
    }
    return lista
  }

  return (
    <div className="pagina">
      <h1>Tabla de Multiplicar</h1>
      <input type="number" placeholder="Numero" value={numero} onChange={function (e) { setNumero(e.target.value) }} />
      <button onClick={generarTabla}>Generar Tabla</button>
      <div className="tabla-resultado">
        {mostrarFilas()}
      </div>
    </div>
  )
}

export default TablaMultiplicar
