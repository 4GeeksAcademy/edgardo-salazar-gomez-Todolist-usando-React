const Card = ({ imagen, titulo, texto, boton }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ">
      <div className="card h-100 ">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{texto}</p>
        </div>
        <div className="card-footer">
          <small className="boton d-flex justify-content-center text-body-secondary"><a href={boton} target="blank" class="btn btn-primary">Find Out More!</a></small>
        </div>
      </div>
    </div>
  )
}
export default Card;


