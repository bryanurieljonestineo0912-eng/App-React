import { useState } from 'react'

function Traductor() {
  const [numero, setNumero] = useState('')
  const [resultado, setResultado] = useState('')
  const [error, setError] = useState('')

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
  const especiales = { 10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 16: "dieciseis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve" }
  const veintenas = ["veinte", "veintiuno", "veintidos", "veintitres", "veinticuatro", "veinticinco", "veintiseis", "veintisiete", "veintiocho", "veintinueve"]
  const decenasPalabras = { 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta", 70: "setenta", 80: "ochenta", 90: "noventa" }
  const centenasPalabras = { 100: "ciento", 200: "doscientos", 300: "trescientos", 400: "cuatrocientos", 500: "quinientos", 600: "seiscientos", 700: "setecientos", 800: "ochocientos", 900: "novecientos" }

  function convertirDecenas(n) {
    if (n < 10) {
      return unidades[n]
    }
    if (n < 20) {
      return especiales[n]
    }
    if (n < 30) {
      return veintenas[n - 20]
    }
    const decena = Math.floor(n / 10) * 10
    const unidad = n % 10
    if (unidad === 0) {
      return decenasPalabras[decena]
    }
    return decenasPalabras[decena] + " y " + unidades[unidad]
  }

  function convertirCentenas(n) {
    const centena = Math.floor(n / 100) * 100
    const resto = n % 100
    if (centena === 100 && resto === 0) {
      return "cien"
    }
    const texto = centenasPalabras[centena]
    if (resto === 0) {
      return texto
    }
    return texto + " " + convertirDecenas(resto)
  }

  function numeroALetras(n) {
    if (n === 1000) {
      return "mil"
    }
    if (n < 100) {
      return convertirDecenas(n)
    }
    return convertirCentenas(n)
  }

  function traducir() {
    const n = parseInt(numero)
    if (isNaN(n) || n < 1 || n > 1000) {
      setError('Ingresa un numero entre 1 y 1000')
      setResultado('')
      return
    }
    setError('')
    setResultado(numeroALetras(n))
  }

  function mostrarError() {
    if (error === '') {
      return null
    }
    return <p className="error">{error}</p>
  }

  function mostrarResultado() {
    if (resultado === '') {
      return null
    }
    return <h2>{resultado}</h2>
  }

  return (
    <div className="pagina">
      <h1>Traductor de Numero a Letras</h1>
      <input type="number" placeholder="Numero del 1 al 1000" value={numero} onChange={function (e) { setNumero(e.target.value) }} />
      <button onClick={traducir}>Traducir</button>
      {mostrarError()}
      {mostrarResultado()}
    </div>
  )
}

export default Traductor
