import { useState, useContext, useEffect } from "react";
import { CardContext } from "./CartContex";
import '../styles/ItemCartContainer.css';
import carritoVacio from './img/carritoVacio.png';
import { Link } from "react-router-dom";

function ItemCartContainer() {
    
    const [data, setData] = useContext(CardContext);
    const [amountTotal, setAmountTotal] = useState(0)

    const clearCart = () => {

        setData({
            quantity: 0,
            items: []
        })
        console.log(`Se ha eliminado todos los productos del carrito`)
    }

    const removeItem = (itemDelete) => {

        const itemEliminar = data.items.find(producto => producto.id === itemDelete);
        const datosFiltadros = data.items.filter((producto) => producto.id !== itemDelete)

        setData({
            ...data,
            quantity: data.quantity - itemEliminar.qty,
            items: [...datosFiltadros]
        })

    }

    const calcularTotal = () => {

        if (data.items.length === 0) return 0
        const array = data.items.map(item => item.qty * item.price )

       
        let result = array.reduce((acu, currentvalue) => acu + currentvalue)
        setAmountTotal(result)
    }

    useEffect(() => {
        calcularTotal()
        
    }, [data, amountTotal])
    
    return (
        <div className="ItemCartContainer">
            <h2>Carrito de compras</h2>
            { !!data.quantity && <h3>Cantidad de items {data.quantity}</h3>}
            {
                data.items.length > 0 ?
                data.items.map(item => 
                    (
                    <div className="widgetCartItem">
                        
                        <div className="widgetCartItem__info">
                            <img className="widgetCartItem__img" src={`/productos/${item.pictureUrl}`} alt="imagen"/>
                            <h4 className="widgetCartItem__title">{item.title} - {item.description}</h4>
                            <span className="widgetCartItem__qty">{item.qty} x {item.price}  $</span>
                            <button className="widgetCartItem__eliminar" onClick={() => removeItem(item.id)}>X</button>
                        </div>
                        
                    </div>
                    )
                )
                :
                <div className="CartEmpty">
                    <h4>No se han agregado productos</h4>
                    <div>
                        <img src={carritoVacio} alt="Carrito Vacio"/>
                    </div>
                    <Link to="/">Ir a Productos Destacados</Link>    
                </div>
            }

            { !!data.quantity && (
                <>
                <h3>Monto Total:  {amountTotal}</h3>
                <div className="ItemCartFooter">
                    <button className="" onClick={() => clearCart()}>Vaciar Carrito</button>
                    <Link to="/checkout">Procesar Compra</Link>
                </div>
                </>
            )}
        </div>
    );
};

export default ItemCartContainer;