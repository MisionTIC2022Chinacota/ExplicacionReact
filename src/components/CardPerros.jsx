import { link } from "react-router-dom";

function CardPerroAdopcion(nombre, imagen) {
  return (
    <li className="breedCard">
      <Link to='/negrito'>
        <div className="contenedorImagen">
          <img src={imagen} alt={nombre} />
        </div>
      </Link>
      <span className="breedTitle">{nombre}</span>
    </li>
  );
}

export default CardPerroAdopcion;