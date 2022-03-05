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
            <CardPerroAdopcion/>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={manchas} alt="Manchas" />
              </div>
              <span className="breedTitle">Manchas</span>
            </li>
            <li className="breedCard">
              <div className="contenedorImagen">
                <img src={ovejero} alt="Ovejero" />
              </div>
              <span className="breedTitle">Ovejero</span>
            </li>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardPerroAdopcion() {
  return (
    <li className="breedCard">
      <div className="contenedorImagen">
        <img src={negrito} alt="Negrito" />
      </div>
      <span className="breedTitle">Negrito</span>
    </li>
  );
}

export default App;
