import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Loader from '../components/general/Loader';
import { getFirestore } from "../firebase/index";

function ItemDetailContainer() {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState(false)

    const db = getFirestore();

    useEffect(() => {
        db.collection('productos').doc(id).get()
        .then(doc => {
            if (doc.exists) {
                setItem(doc.data())
                console.log('Todo OK')
            }else{
                console.log('El prouducto NO existe')
                setError(true)
            }
            
        })
        .catch(e => console.log(e))

    }, []);

    return (
      <section>
        <div className="container">
        {
            Object.keys(item).length !== 0 ?
            <>
                <h2 className="titulo-seccion">Detalle del Producto N° - {item.id}</h2>
                <ItemDetail item={item}/>
            </> :
                !error ?
                <Loader />
                :
                <div className="alert alert--warning">😵 Lo sentimos <strong>NO</strong> encontramos el producto que estas buscando.</div>
        }
        </div>
      </section>
    );
}
  
export default ItemDetailContainer;