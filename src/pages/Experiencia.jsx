function Experiencia() {
  return (
    <div className="pagina">
      <h1>Experiencia Personal</h1>
      <p>Video explicando mi experiencia realizando esta tarea:</p>
      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
          title="Experiencia Personal"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Experiencia
