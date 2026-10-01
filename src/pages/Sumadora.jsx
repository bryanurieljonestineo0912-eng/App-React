import { useState } from 'react'

function Sumadora() {
  const [numero1, setNumero1] = useState('')
  const [numero2, setNumero2] = useState('')
  const [resultado, setResultado] = useState(null)

  function sumar() {
    const n1 = parseFloat(numero1)
    const n2 = parseFloat(numero2)
    if (isNaN(n1) || isNaN(n2)) {
      alert('Ingresa dos numeros validos')
      return
    }
    setResultado(n1 + n2)
  }

  function mostrarResultado() {
    if (resultado === null) {
      return null
    }
    return <h2>Resultado: {resultado}</h2>
  }

  return (
    <div className="pagina">
      <h1>Sumadora</h1>
      <input type="number" placeholder="Numero 1" value={numero1} onChange={function (e) { setNumero1(e.target.value) }} />
      <input type="number" placeholder="Numero 2" value={numero2} onChange={function (e) { setNumero2(e.target.value) }} />
      <button onClick={sumar}>Sumar</button>
      {mostrarResultado()}
    </div>
  )
}

export default Sumadora
