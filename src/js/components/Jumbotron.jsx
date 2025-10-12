const Jumbotron = () => {
  return (
    <div className="d-flex justify-content-center mt-3 ">
      <div style={{ width: '88%', minheight: '50vh' }}>
        <div className="card border-0 bg-body-tertiary h-100">
          <div className="card-body">
            <h5 className="card-title display-3 pt-3">A warn Welcome</h5>
            <p className="card-text">
              🎤✨ ¡Conoce a tus artistas y cantantes favoritos! ✨🎤
              🎶 Descubre sus canciones, historias y todo lo que los hace únicos. 💖
              🌟 Sigue cada lanzamiento, cada concierto y cada momento épico de tu estrella favorita. 🎵
              📸 Mira fotos exclusivas, entrevistas y curiosidades que no encontrarás en ningún otro lugar. 🎬
              💃 Vive la música, comparte la emoción con otros fans y sé parte de su mundo. 💫💜            </p>
            <a href="#" className="btn btn-primary">Call to action</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;

