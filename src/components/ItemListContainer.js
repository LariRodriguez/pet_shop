import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import Loader from '../components/general/Loader';
import { getFirestore } from "../firebase/index";

function ItemListContainer() {

  const { category_name } = useParams();
  const [items, setItems] = useState([]);
  const db = getFirestore();

  const getProductsFromDB = () => {
      db.collection('productos').get()
      .then(docs => {
        let arr = [];
          docs.forEach(doc => {

            if (typeof category_name !== 'undefined') {
              
              if (doc.data().category == category_name){
                arr.push({id: doc.id, data: doc.data()})
              }       

            }else{
              if (doc.data().outstanding == true){
                arr.push({id: doc.id, data: doc.data()})
              }
            }
            
          })

        setItems(arr)
      })
      .catch(e => console.log(e));
  }

  useEffect(() => {
      getProductsFromDB(); 
  }, [category_name]);

    return (
      <section>
        <div className="container">
          {
            items.length ?
          <>
            <h2 className="titulo-seccion">Productos destacados</h2>
            <ItemList items={items}/>
          </> :
            <Loader />
          }
        </div>
      </section>
    );
}
  
export default ItemListContainer;