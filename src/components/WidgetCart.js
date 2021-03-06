import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CardContext } from "./CartContex";
import '../styles/WidgetCart.css';
import carritoVacio from './img/carritoVacio.png';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(CardContext);

    const clearCart = () => {
        setData({
            quantity: 0,
            items: []
        })
        console.log(`Se ha eliminado todos los productos del carrito`)
    }

    const removeItem = (itemDelete) => {
        console.log(itemDelete)
        const itemEliminar = data.items.find(producto => producto.id === itemDelete);
        const datosFiltadros = data.items.filter((producto) => producto.id !== itemDelete)

        console.log(datosFiltadros, itemEliminar)
        setData({
            ...data,
            quantity: data.quantity - itemEliminar.qty,
            items: [...datosFiltadros]
        })
    }

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <h2>Carrito de compras</h2>
            <div className="widgetCart__body">
            {
                data.items.length > 0 ?
                data.items.map(item => (
                    <div className="widgetCartItem">
                        
                        <div className="widgetCartItem__info">
                            <img className="widgetCartItem__img" src={`/productos/${item.pictureUrl}`} alt="imagen"/>
                            <h4 className="widgetCartItem__title">{item.title}</h4>
                            <span className="widgetCartItem__qty">{item.qty}</span>
                            <button className="widgetCartItem__eliminar" onClick={() => removeItem(item.id)}>X</button>
                        </div>  
                    </div>
                ))
                :
                <div className="CartEmpty">
                    <h4>No se han agregado productos</h4>
                    <div>
                        <img src={carritoVacio} alt="Carrito Vacio"/>
                    </div>
                    <Link to="/">Ir a Productos Destacados</Link>    
                </div>
            }
            </div>

            <div className="widgetCart__footer">
            { !!data.quantity && ( <Link  className="widgetCartItem__cart" to="/cart">Detalle de Compra</Link>)}             
                <div>
                { !!data.quantity && (<button className="widgetCartItem__clean" onClick={() => clearCart()}>Vaciar Carrito</button>)}
                    <button className="widgetCartItem__close" onClick={action}>Cerrar widget</button>
                </div>
            </div>
        </div>
    )
}
export default WidgetCart;