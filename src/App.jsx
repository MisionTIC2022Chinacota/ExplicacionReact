import logo from './media/DogCat.png';
import './styles/styles.css';
import negrito from './media/negrito.jpg';
import manchas from './media/manchas.jpg';
import ovejero from './media/ovejero.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="Imagen" className="logo" />
          </li>
          <li>
            <button className="button mainButton">Crear Nuevo Post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una raza" />
              <i className="fa-solid fa-magnifying-glass button iconBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="button secondaryButton">Login</button>
          </li>
          <li>
            <button className="button mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Perritos en Adopción</h1>
          <ul className="breedCardContainer">
            <CardPerroAdopcion nombre= 'Negrito' imagen={negrito} />
            <CardPerroAdopcion nombre= 'Manchas' imagen={manchas} />
            <CardPerroAdopcion nombre= 'Ovejero' imagen={ovejero} />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardPerroAdopcion(props) {
  return (
    <li className="breedCard">
      <div className="contenedorImagen">
        <img src={props.imagen} alt={props.nombre} />
      </div>
      <span className="breedTitle">{props.nombre}</span>
    </li>
  );
}

export default App;
