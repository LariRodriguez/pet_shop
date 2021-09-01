import logo from './logo.png';
import '../styles/NavBar.css';
import CartWidget from './CartWidget';
import NavItem from './NavItem';
import { Link } from "react-router-dom";

function NavBar() {
  const menuItems = [
    {
      texto: 'Accesorios',
      ruta: '/category/accesorios'
    },
    {
      texto: 'Ropa',
      ruta: '/category/ropa'
    },
  ]

  return (
        <nav className="navbar">
            <Link to="/"><img className="navbar__logo" src={logo} alt=""/></Link>
            <ul className="navbar__menu">
              {
              menuItems.map((category, index) => <NavItem key={index} texto={category.texto} url={category.ruta} />)
              }
                <li className="navbar__item"><a className="navbar__enlace" href="#">Sobre Nosotros</a></li>
                <li className="navbar__item"><a className="navbar__enlace" href="#">Contacto</a></li>
                <li className="navbar__item"><Link className="navbar__enlace" to="/cart"><CartWidget/></Link></li>
            </ul>
        </nav>
  );
}

export default NavBar;