import { Link } from "react-router-dom";
import './styles/Footer.css'

function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__titulo" >¡Seguinos!</h2>
                <div className="footer__redes">
                    <Link className="footer__social" to="https://www.instagram.com/" target="_blank">Instagram</Link>
                    <Link className="footer__social" to="https://www.facebook.com/"  target="_blank">Facebook</Link>
                </div>
                <div className="footer__newsletter">
                    <h3 className="footer__subtitulo" >Subcribite a nuestro newslestter</h3>
                    <form className="footer__form" action="">
                        <input className="footer__input" type="text" name="nombre" placeholder="Nombre"/>
                        <input className="footer__input" type="email" name="email" placeholder="Email"/>
                        <button className="footer__submit">Subscribirse</button>
                    </form>
                </div>
            </div>
            <div className="container-fluid">
                <Link className="footer__enlace" to="#" target="_blank">Terminos y Condiciones</Link>
                <Link className="footer__enlace" to="#" target="_blank">Políticas de privacidad</Link>
                <Link className="footer__enlace" to="#" target="_blank">Como Comprar</Link>
            </div>
        </footer>
    );
}

export default Footer;