import foto from '../assets/foto.png'

function Inicio() {
  return (
    <div className="pagina">
      <h1>Pagina Inicial</h1>
      <img src={foto} alt="Foto 2x2" className="foto-perfil" />
      <p><b>Nombre:</b> Bryan</p>
      <p><b>Apellido:</b> Jones Tineo</p>
      <p><b>Correo:</b> bryan.jones@ejemplo.com</p>
    </div>
  )
}

export default Inicio
